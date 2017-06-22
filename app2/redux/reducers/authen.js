import {ActionTypes} from '../core/type'
export default function(state = null,action) {
    switch (action.type){
        case ActionTypes.LOG_IN:
            return action.username;
        case ActionTypes.LOG_OUT:
            return null;
        default:
            return state;
    }
}

