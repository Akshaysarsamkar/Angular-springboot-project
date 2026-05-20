from pathlib import Path
import fnmatch

# 🔥 UNIFIED CONFIG — SAME STRUCTURE FOR ALL SCOPES
CONFIG = {
    "global": {
        "extensions": {".txt", ".log"},
        "filenames": {
            "Get_File_Content.py",
            "full_project_code_file.md",
            "README.md"
        },
        "patterns": ["*.pyc"],
        "directories": {
            ".git",
            "venv",
            ".venv",
            "node_modules",
            "__pycache__",
            "data"
        },
    },

    "dump_only": {
        "extensions": set(),
        "filenames": {".env"},
        "patterns": [".env.*"],
        "directories": set(),
    },

    "tree_only": {
        "extensions": set(),
        "filenames": set(),
        "patterns": [],
        "directories": set(),
    }
}


def match_patterns(name, patterns):
    return any(fnmatch.fnmatch(name, pattern) for pattern in patterns)


def matches_rule(path: Path, rules: dict):

    # 🔹 Directory check
    if path.is_dir() and path.name in rules["directories"]:
        return True

    # 🔹 Extension check
    if path.suffix.lower() in rules["extensions"]:
        return True

    # 🔹 Filename check
    if path.name in rules["filenames"]:
        return True

    # 🔹 Pattern check
    if match_patterns(path.name, rules["patterns"]):
        return True

    return False


def should_exclude(path: Path, context: str):
    """
    context = 'tree' or 'dump'
    """

    # 🔹 GLOBAL always applies
    if matches_rule(path, CONFIG["global"]):
        return True

    # 🔹 Context-specific rules
    if context == "tree":
        if matches_rule(path, CONFIG["tree_only"]):
            return True

    elif context == "dump":
        if matches_rule(path, CONFIG["dump_only"]):
            return True

    return False


# 🔹 Language detection for markdown
def get_language(file_path: Path):

    return {
        ".py": "python",
        ".js": "javascript",
        ".ts": "typescript",
        ".java": "java",
        ".kt": "kotlin",
        ".kts": "kotlin",
        ".c": "c",
        ".h": "c",
        ".cpp": "cpp",
        ".json": "json",
        ".yaml": "yaml",
        ".yml": "yaml",
        ".html": "html",
        ".css": "css",
        ".sh": "bash",
    }.get(file_path.suffix.lower(), "")


# 🔹 TREE GENERATION
def generate_tree(root_path: Path) -> str:

    tree_lines = []

    def walk(directory: Path, prefix=""):

        items = [
            p for p in directory.iterdir()
            if not should_exclude(p, context="tree")
        ]

        # 🔹 FILES FIRST
        files = sorted(
            [p for p in items if p.is_file()],
            key=lambda x: x.name.lower()
        )

        dirs = sorted(
            [p for p in items if p.is_dir()],
            key=lambda x: x.name.lower()
        )

        ordered = files + dirs

        for i, item in enumerate(ordered):

            connector = "└── " if i == len(ordered) - 1 else "├── "

            tree_lines.append(f"{prefix}{connector}{item.name}")

            if item.is_dir():

                extension = (
                    "    "
                    if i == len(ordered) - 1
                    else "│   "
                )

                walk(item, prefix + extension)

    tree_lines.append(root_path.name)

    walk(root_path)

    return "\n".join(tree_lines)


# 🔹 FILE DUMP
def dump_files(root_path: Path, outfile):

    def walk(directory: Path):

        items = [
            p for p in directory.iterdir()
            if not should_exclude(p, context="dump")
        ]

        # 🔹 FILES FIRST
        files = sorted(
            [p for p in items if p.is_file()],
            key=lambda x: x.name.lower()
        )

        dirs = sorted(
            [p for p in items if p.is_dir()],
            key=lambda x: x.name.lower()
        )

        # 🔹 WRITE FILE CONTENTS
        for file_path in files:

            try:
                relative_path = file_path.relative_to(root_path)

                content = file_path.read_text(
                    encoding="utf-8",
                    errors="ignore"
                )

                lang = get_language(file_path)

                outfile.write("\n---\n\n")

                outfile.write(f"## 📄 {relative_path}\n\n")

                outfile.write(f"```{lang}\n")

                outfile.write(content)

                outfile.write("\n```\n\n")

            except Exception as e:

                outfile.write(
                    f"\n⚠️ Error reading {file_path}: {e}\n\n"
                )

        # 🔹 THEN DIRECTORIES
        for dir_path in dirs:
            walk(dir_path)

    walk(root_path)


# 🔹 MAIN
def dump_project_to_markdown(output_file: str):

    # 🔹 ONLY SRC FOLDER
    root_path = Path.cwd() / "src"

    # 🔹 CHECK IF SRC EXISTS
    if not root_path.exists():
        print("❌ src folder not found.")
        return

    with open(output_file, "w", encoding="utf-8") as outfile:

        # 🔹 HEADER
        outfile.write(f"# 📦 Project Dump: {root_path.name}\n\n")

        # 🔹 TREE STRUCTURE
        outfile.write("## 📁 Project Structure\n\n")

        outfile.write("```\n")

        outfile.write(generate_tree(root_path))

        outfile.write("\n```\n\n")

        outfile.write("---\n\n")

        # 🔹 FILE CONTENTS
        outfile.write("## 📄 File Contents\n")

        dump_files(root_path, outfile)

    print(f"✅ Markdown file generated: {output_file}")


# 🔹 RUN SCRIPT
if __name__ == "__main__":

    dump_project_to_markdown("full_project_code_file.md")