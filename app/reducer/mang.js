
var mangReducer = (state=['android','ios','nodejs','nodejsqqqq'],action)=> {
    switch (action.type) {
        case 'ADD_ITEM':
            return [action.item,...state ];
        case 'REMOVE_ITEM':
            return state.filter((e, key) => key !== action.index);
        default:
            return state;
    }
};

module.exports = mangReducer;