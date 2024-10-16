import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store.js";
import { Provider } from "react-redux";

//RTK Query
// import { ApiProvider } from "@reduxjs/toolkit/query/react";
// import { mainApiSlice } from "./store/features/Main/apiMain.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </Provider>
 </StrictMode>
);
