export interface carDetails{
    brand: string;
    name: string;
    type: string;
    year: string;
    color: string;
    transmission: string;
    imgUrl: string;
    price: string;
    description: string;
}


export interface getCarDetailsResponse{
    brand: string;
    name: string;
    type: string;
    year: string;
    color: string;
    transmission: string;
    imgUrl: string;
    price: string;
    description: string;
    carId: string;
}

 export const validationMessages: any = {
    brand: {
      required: 'Brand is required'
    },
    name: {
      required: 'Car name is required'
    },
    type: {
      required: 'Car type is required'
    },
    price: {
      required: 'Price is required',
      pattern: 'Enter valid price'
    },
    description: {
      required: 'Description is required',
      minlength: 'Minimum 10 characters required'
    },
    year: {
      required: 'Year is required'
    },
    color: {
      required: 'Color is required'
    },
    transmission: {
      required: 'Transmission is required'
    },
    imgUrl: {
      required: 'Image URL is required'
    }
  };