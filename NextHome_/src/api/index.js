import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' },);

// const url ='http://localhost:5000/rentals';

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
return req;
  
});

export const fetchrental = (id) => API.get(`/rentals/${id}`);
export const fetchRentalsBySearch = (searchQuery) => API.get(`/rentals/search?searchQuery=${searchQuery.search || 'none'}`)

export const fetchRentals = () => API.get('/rentals');
export const createRental = (newRental) => API.post('/rentals',newRental);
export const updateRental = (id,updatedRental) => API.patch(`/rentals/${id}`,updatedRental);

export const likePost = (id) => API.patch(`/rentals/${id}/likePost`);


export const signIn = (formData) => API.post('/user/signin', formData)
export const signUp = (formData) => API.post('/user/signup', formData)

// export function fetchRentals() {
//     throw new Error('Function not implemented.');
// }

