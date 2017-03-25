import tab from './tabReducer';
import navigator from './navigatorReducer';

//Navigator is an object, which use for navigate Shop from MainView to product detail DetailView 
//It will set for the store when we init the main View


const redux = require('redux');

const reducer = redux.combineReducers({ tab, navigator });

export default reducer;
