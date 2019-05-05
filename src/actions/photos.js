
import { LOAD_PHOTOS_SUCCESS } from '../constants'

export function loadPhotos(albumId) {
    return function (dispatch) {
        let api = `http://jsonplaceholder.typicode.com/photos?albumId=${albumId}`;
        fetch(api)
            .then(response => response.json())
            .then(photos => {
                dispatch({ type: LOAD_PHOTOS_SUCCESS, photos, albumId })
            })
    }
}


export function loadComments(photoId) {
    return function (dispatch) {
        let api = `http://jsonplaceholder.typicode.com/comments?postId=${photoId}`;
        fetch(api)
            .then(response => response.json())
            .then(photos => {
                dispatch({ type: LOAD_PHOTOS_SUCCESS, photos, photoId })
            })
    }
}