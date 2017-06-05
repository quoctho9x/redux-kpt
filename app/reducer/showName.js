var name = (state=false,action)=> {
    switch (action.type) {
        case 'SHOW_NAME':
            return !state;
        default:
            return state;
    }
};

module.exports = name;