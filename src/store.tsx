import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux/reducers/main";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Use localStorage for persistence

// Configure persist
const persistConfig = {
  key: "root", // Key for storage
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store as any); // Export persistor
export default store;
