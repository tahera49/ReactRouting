
import { LOAD_REVIEWS_SUCCESS, SUBMIT_NEW_REVIEW } from '../constants'

export function loadReviews(albumId) {
    return function (dispatch) {
        let api = `http://jsonplaceholder.typicode.com/photos?albumId=${albumId}`;
        fetch(api)
            .then(response => response.json())
            .then(reviews => {
                dispatch({ type: LOAD_REVIEWS_SUCCESS, reviews, albumId })
            })
    }
}


export function loadComments(photoId) {
    return function (dispatch) {
        let api = `http://jsonplaceholder.typicode.com/comments?postId=${photoId}`;
        fetch(api)
            .then(response => response.json())
            .then(reviews => {
                dispatch({ type: LOAD_REVIEWS_SUCCESS, reviews, photoId })
            })
    }
}