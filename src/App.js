import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Orders from "./components/Orders/Orders";
import Shop from "./components/Shop/Shop";
import Main from "./layouts/Main";
import Inventory from "./components/Inventory/Inventory";
import About from "./components/About/About";
import { productsAndCartLoader } from "./loaders/productsAndCartLoader";
import LogIn from "./components/LogIn/LogIn";
import Register from "./components/Register/Register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("products.json"),
          element: <Shop></Shop>,
        },
        {
          path: "/orders",
          loader: productsAndCartLoader,
          element: <Orders></Orders>,
        },
        {
          path: "inventory",
          element: <Inventory></Inventory>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/login",
          element: <LogIn></LogIn>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
