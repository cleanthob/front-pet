import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { Cart } from "./pages/Cart";
import { Detail } from "./pages/Detail";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/product/:id", element: <Detail /> },
      { path: "/cart", element: <Cart /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export { router };
