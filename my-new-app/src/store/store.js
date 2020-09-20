import reduxLogger from 'redux-logger';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import cardsReducer from '../reducers/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState = {}) {
  return createStore(
    combineReducers({
      cardsReducer,
    }),
    preloadedState,
    composeEnhancers(applyMiddleware(reduxLogger)),
  );
}