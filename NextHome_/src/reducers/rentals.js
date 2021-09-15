export default (rentals = [] ,action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        
        case 'CREATE':
            return [...rentals , action.payload];

        case 'UPDATE':
            return rentals.map((rental) =>  rental._id  = action.payload._id  ? action.payload: rental);
            
        default:
            return rentals;
    }

}