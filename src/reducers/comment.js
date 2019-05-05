

import { BUY } from '../constants'

export function commentReducer(state = [], action) {
    console.log('comment reducer..');
    switch (action.type) {
        case BUY: return [...state, action.item]
        default: return state
    }
}