const BASEURL = 'http://localhost:8080/api';

export const APIENDPOINTS = {

    SIGNUP: `${BASEURL}/auth/signup`,
    LOGIN: `${BASEURL}/auth/login`,

    admin: {
        POST_CARD_DETAILS: `${BASEURL}/admin/add-Car`,
        GET_ALL_CAR_DETAILS: `${BASEURL}/admin/get-all-cars`,
        DELETE_CAR_DETAILS: `${BASEURL}/admin/deletecar`,
        UPDATE_CAR_DETAILS: `${BASEURL}/admin/update-car`,
        HISTORY_OF_BOOKED_CARS: `${BASEURL}/admin/booked-cars`, 
        CHANGE_BOOKING_STATUS: `${BASEURL}/admin/change-status`
    },

    customer:{
        GET_ALL_CAR_DETAILS: `${BASEURL}/car/get-all-cars`,
        GET_CAR_DETAILS_BY_ID: `${BASEURL}/car/get-all-cars`,
        BOOK_CAR: `${BASEURL}/car/book-car`,
        MY_BOOKING_HISTORY: `${BASEURL}/car/my-booking`

    }
}