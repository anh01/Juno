import tab from './tabReducer';

const redux = require('redux');

const reducer = redux.combineReducers({ tab });

export default reducer;
