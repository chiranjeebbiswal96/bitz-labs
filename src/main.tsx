import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store.tsx";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
    <StrictMode>
      <App />
    </StrictMode>
    </PersistGate>
  </Provider>
);
