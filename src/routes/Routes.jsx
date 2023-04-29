import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../layouts/Main";
import Category from "../pages/Home/Category/Category";
import Home from "../pages/Home/Home/Home";
import News from "../pages/News/News/News";
import NewsLayout from './../layouts/NewsLayout';



const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/category/:id",
                element:<Category/>
            },
            {
                path:"/news/:id"
            }
        ]
    },
    {
        path:"/news",
        element: <NewsLayout/>,
        children:[
            {
                path:":id",
                element:<News/>
            }
        ]
    }
]);

export default router;


