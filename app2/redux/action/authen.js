//day la nhung action, Action Creators
import {ActionTypes} from '../core/type';

//Action creator đầu tiên của chúng ta sẽ nhận vào input là list tracks, cái mà chúng ta sẽ set vào global state.
// Action creator này sẽ trả về một object chứa action type và payload là list mà chúng ta đã truyền vào.
export function LOG_IN(username) {
    return{
        type:ActionTypes.LOG_IN,
        username
    }
}

export function LOG_OUT() {
    return{
        type:ActionTypes.LOG_OUT
    }
}


