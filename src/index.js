import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import { setupStore } from "./store/";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const store = setupStore({});

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
