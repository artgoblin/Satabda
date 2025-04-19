// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modalSlice';
import themeReducer from './themeSlice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    theme: themeReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
