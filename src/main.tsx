import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./App";
import { Toaster } from "react-hot-toast";

import { CartProvider } from "./contexts/CartContext";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
      <Toaster />
    </CartProvider>
  </StrictMode>,
);
