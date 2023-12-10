import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootStore, AppDispatch } from "../services/store";

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;
