import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import { UserProvider } from "./contexts/UserContext";
import { ModalProvider } from "./contexts/ModalContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <UserProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
