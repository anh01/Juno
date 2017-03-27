const navigator = (state = null, action) => {
    if (action.type === 'SET_NAVIGATOR') {
        return action.nav;
    }
    return state;
};

export default navigator;
