import { PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { CartState } from "./features/dashboard.slice";

export const cartPersistConfig: PersistConfig<CartState> = {
  key: "cart",
  storage,
};
