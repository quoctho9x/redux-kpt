//day la nhung action, Action Creators
import {ActionTypes} from '../core/type';

//Action creator đầu tiên của chúng ta sẽ nhận vào input là list tracks, cái mà chúng ta sẽ set vào global state.
// Action creator này sẽ trả về một object chứa action type và payload là list mà chúng ta đã truyền vào.
export function GET_LIST_CARTS(lists) {
    return{
        type:ActionTypes.GET_LIST_CARTS,
        lists
    }
}


