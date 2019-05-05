

import { combineReducers } from 'redux';
import { albumsReducer } from './albums';
import { reviewsReducer } from './reviews';
import { cartReducer } from './cart';


const rootreducer = combineReducers({
    albums: albumsReducer,
    reviews: reviewsReducer,
    cart: cartReducer
});

export default rootreducer;