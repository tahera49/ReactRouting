

import { combineReducers } from 'redux';
import { albumsReducer } from './albums';
import { photosReducer } from './photos';
import { commentReducer } from './comment';


const rootreducer = combineReducers({
    albums: albumsReducer,
    photos: photosReducer,
    comment: commentReducer
});

export default rootreducer;