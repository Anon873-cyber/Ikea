import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/veriables.css";
import "./style/font.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
    </BrowserRouter>
    </Provider>
);
console.log("Application mounted");
