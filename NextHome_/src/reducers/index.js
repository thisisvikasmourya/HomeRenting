import { combineReducers } from "redux";

import rentals from './rentals'
import auth from './auth';

export default combineReducers({ rentals,auth });


