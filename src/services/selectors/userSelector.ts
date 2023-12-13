import { RootStore } from '../store';

export const selectisAuthChecked = (store: RootStore) => store.user.isAuthChecked;

export const selectUser = (store: RootStore) => store.user.user;
