import { RootStore } from "../store";

export const SelectModalType = (store: RootStore) => store.modal.type;

export const SelectModalOpen = (store: RootStore) => store.modal.isOpen;
