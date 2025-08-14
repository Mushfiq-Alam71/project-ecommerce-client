import {
   createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import BrowseMenu from '../Pages/BrowseMenu/BrowseMenu';

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
      children: [
         {
            path: '/home',
            element: <Home></Home>,
         },
         {
            path: '/browse-menu',
            element: <BrowseMenu></BrowseMenu>,
         },
      ]
   },
]);
