import { FETCH_RENTAL } from "../constants/actionTypes";

export default (rentals = [] ,action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'FETCH_BY_SEARCH':
            return action.payload;

        case 'CREATE':
            return [...rentals , action.payload];
        case FETCH_RENTAL:
            return { ...rentals, rental: action.payload };

        case 'LIKE':
            return rentals.map((rental) => (rental._id === action.payload._id ? action.payload : rental));

        case 'UPDATE':
            return rentals.map((rental) =>  rental._id  = action.payload._id  ? action.payload: rental);
            
        default:
            return rentals;
    }

}