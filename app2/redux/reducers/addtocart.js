import {ActionTypes} from '../core/type'

export default function(state = [],action){
    switch (action.type){
        case ActionTypes.ADD_TO_CARTS:
            const {list_carts} = action;
            return [...list_carts];
        default:
            return state;
    }
}