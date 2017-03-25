const navigator = (state = null, action) => {
    if (action.type === 'SET_NAVIGATOR') {
        return action.navigator;
    }
    return state;
};

export default navigator;
