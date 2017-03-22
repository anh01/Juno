const tab = (state = 'SHOP', action) => {
    if (action.type === 'CHANGE_MAIN_TAB') {
        return action.name;
    }
    return state;
};

export default tab;
