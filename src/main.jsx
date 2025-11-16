import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "~/assets/styles/main.scss";
import { BrowserRouter } from "react-router-dom";
import SidebarProvider from "./contexts/SidebarProvider.jsx";
import ToastifyProvider from "./contexts/ToastifyProvider.jsx";
import StoreProvider from "./contexts/StoreProvider.jsx";
import SearchProvider from "./contexts/SearchProvider.jsx";

createRoot(document.getElementById("root")).render(
  <ToastifyProvider>
    <StoreProvider>
      <SidebarProvider>
        <SearchProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SearchProvider>
      </SidebarProvider>
    </StoreProvider>
  </ToastifyProvider>
);
