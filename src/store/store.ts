import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
  type TypedUseSelectorHook,
} from "react-redux";
import { middleware } from "./middleware";

export const reduxStore = configureStore({
  reducer,
  // middleware: (getDefaultMiddleware) => {
    // NOTE: for production for createLogger of redux-logger should disable on production
    // return getDefaultMiddleware().concat(process.env.NODE_ENV !== 'production' ? middleware : [])
    // NOTE: for debuging
    // return getDefaultMiddleware().concat(middleware)
  // },
  // NOTE: for production
  // devTools: process.env.NODE_ENV !== 'production',
  // NOTE: for debuging this devTools should disable on production
  devTools: true,
});

export const useDispatch = () => useReduxDispatch<ReduxDispatch>();
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;

export type ReduxStore = typeof reduxStore;
export type ReduxState = ReturnType<typeof reduxStore.getState>;
export type ReduxDispatch = typeof reduxStore.dispatch;

export type ReduxThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  Action
>;
