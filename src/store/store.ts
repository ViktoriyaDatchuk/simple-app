import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { postAPI } from '../services/postService';

const rootReducer = combineReducers({
  [postAPI.reducerPath]: postAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDeffaultMiddleware) => getDeffaultMiddleware().concat(postAPI.middleware),
  });
};
