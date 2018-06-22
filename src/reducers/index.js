import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

/* Reducers */
import video from './reducer_searchVideo';
import search from './reducer_searchBar';

const reducer = combineReducers({
  video,
  search
});

const middlewares = applyMiddleware(thunk);

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  middlewares
);

export default store;
