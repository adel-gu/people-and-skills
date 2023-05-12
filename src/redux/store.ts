import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import peopleReducer from './people/people';

const rootReducer = combineReducers({ person: peopleReducer });

const store = configureStore({ reducer: rootReducer, middleware: [thunk] });

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
