
import { LOAD_ALBUM_SUCCESS } from '../constants'

export function albumsReducer(state = [], action) {
    console.log('albums reducer..');
    switch (action.type) {
        case LOAD_ALBUM_SUCCESS: return [...state, ...action.albums]
        default: return state;
    }
}
