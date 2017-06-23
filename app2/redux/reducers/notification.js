import {ActionTypes} from '../core/type'

export default function(state = null,action){
    switch (action.type){
        case ActionTypes.SHOW_NOTIFICATION:
            return action.text;
        case ActionTypes.HIDE_NOTIFICATION:
            return null;
        default:
            return state;
    }
}
