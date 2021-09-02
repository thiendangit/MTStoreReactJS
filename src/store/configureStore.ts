import {
    configureStore,
    DeepPartial,
    getDefaultMiddleware,
} from '@reduxjs/toolkit';

import rootReducer from './reducers/rootReducer';

import getPreloadedState from './getPreloadedState';

export type RootState = ReturnType<typeof rootReducer>;

export type PartialRootState = DeepPartial<RootState>;

const configureAppStore = (preloadedState: PartialRootState = {}) => {
    return configureStore({
        reducer: rootReducer,
        middleware: [...getDefaultMiddleware<RootState>()],
        // @ts-ignore
        preloadedState,
    });
};

export type StoreDispatch = ReturnType<typeof configureAppStore>['dispatch'];

export type StoreGetState = ReturnType<typeof configureAppStore>['getState'];

export { getPreloadedState };

export default configureAppStore;
