
import { LOAD_PHOTOS_SUCCESS } from '../constants'

export function photosReducer(state = {}, action) {
    console.log('photos reducer..');
    
    
    switch (action.type) {
        case LOAD_PHOTOS_SUCCESS: {
            let { albumId, photos } = action;
            let newPhotos = [ ...photos]
            return Object.assign({}, state, { [albumId]: newPhotos })
        }
       
        default: return state;
    }
}