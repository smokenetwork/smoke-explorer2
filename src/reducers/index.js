import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import Immutable from "immutable";

////////////////////////////////////////////////////////////////////////////////
// app
export const app = (
  state = (() => {
    let initialState = {
    };
    return initialState;
  })(),
  action) => {
  let immState = Immutable.fromJS(state); // converting to an immutable object
  if (action.reducer !== `app`) {
    return immState.toJS();
  }
  switch (action.type) {
    case 'merge':
      return immState.merge(action.obj).toJS();
    case 'setIn':
      return immState.setIn(action.arr, action.value).toJS();
    default:
      return immState.toJS();
  }
};

////////////////////////////////////////////////////////////////////////////////
// dashboard
export const dashboard = (
  state = (() => {
    let initialState = {
    };
    return initialState;
  })(),
  action) => {
  let immState = Immutable.fromJS(state); // converting to an immutable object
  if (action.reducer !== `dashboard`) {
    return immState.toJS();
  }
  switch (action.type) {
    case 'merge':
      return immState.merge(action.obj).toJS();
    case 'setIn':
      return immState.setIn(action.arr, action.value).toJS();
    default:
      return immState.toJS();
  }
};

////////////////////////////////////////////////////////////////////////////////
//

export const rootReducer = combineReducers({
  app,
  dashboard
});

// store.js
export function configureStore(initialState = {}) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // const store = createStore( rootReducer, initialState, applyMiddleware(thunk));
  const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)));
  return store;
};

export const store = configureStore();
