import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import { createHashRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Components/MainLayout/MainLayout";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  let router = createHashRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        {
          path: "portfolio",
          element: <Portfolio />,
        },
        { path: "contact", element: <Contact /> },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
