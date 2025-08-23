import {
   createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import BrowseMenu from '../Pages/BrowseMenu/BrowseMenu';
import Vegan from '../Components/Food Category/Vegan';
import Sushi from '../Components/Food Category/Sushi';
import Pizza from '../Components/Food Category/Pizza';
import FastFood from '../Components/Food Category/FastFood';
import Others from '../Components/Food Category/Others';

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
         // Sub Category items route
         {
            path: '/vegan',
            element: <Vegan></Vegan>,
         },
         {
            path: '/sushi',
            element: <Sushi></Sushi>,
         },
         {
            path: '/pizza',
            element: <Pizza></Pizza>,
         },
         {
            path: '/fast-food',
            element: <FastFood></FastFood>,
         },
         {
            path: '/others',
            element: <Others></Others>,
         }
      ]
   },
]);
