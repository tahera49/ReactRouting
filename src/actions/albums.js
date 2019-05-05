

import {LOAD_ALBUM_SUCCESS} from '../constants'

export function loadAlbums() {
    return function (dispatch) {
        let api = "http://jsonplaceholder.typicode.com/albums";
        fetch(api)
            .then(response => response.json())
            .then(albums => {
                setTimeout(() => {
                    dispatch({ type: LOAD_ALBUM_SUCCESS, albums })
                }, 3000)
            })
    }
}

