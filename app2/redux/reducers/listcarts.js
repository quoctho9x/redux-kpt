import {ActionTypes} from '../core/type'

export default function(state = [],action){
    switch (action.type){
        case ActionTypes.GET_LIST_CARTS:
            //console.log(action.lists);
            const {lists} = action;
            return [...lists];
        default:
            return state;
    }
}