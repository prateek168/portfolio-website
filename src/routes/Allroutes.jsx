import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Projects from "../Pages/Projects";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/about',
    element: <About/>,
  },
  {
    path: '/projects',
    element: <Projects/>,
  },
]);

const AllRoutes = ()=>{
  return (
    // passing the router Object
    <RouterProvider router = {router} />
  )
};
export default AllRoutes;