import * as api from '../api/index.js';


export const getRentals = () => async(dispatch)=> {
    try {
        const { data } = await api.fetchRentals();

        dispatch ({type: 'FETCH_ALL', payload: data });

    } catch (error) {
        console.log(error.message);

    }
    
};

export const createRental = (rental) => async (dispatch) => {
    try {
      const { data } = await api.createRental(rental);
  
      dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  

export const updateRental = (id,rental) => async (dispatch) => {
      try {
      const {data} =   await api.updateRental(id,rental);

      dispatch({ type: 'UPDATE', payload: data });

      } catch (error) {
        console.log(error.message);

      }


};

export const likePost = (id) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem('profile'));

  try {
    const { data } = await api.likePost(id, user?.token);

    dispatch({ type: 'LIKE', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getrental = (id) => async (dispatch) => {
  try {

    const { data } = await api.fetchrental(id);

    dispatch({ type: 'FETCH_RENTAL', payload:  data  });
  } catch (error) {
    console.log(error);
  }
};


