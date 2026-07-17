import { createBrowserRouter } from "react-router";

import Layout from "@/components/layout/Layout.tsx";

import Home from "@/components/pages/Home.tsx";
import About from "@/components/pages/About.tsx";
import CategoriesList from "@/components/categories/CategoriesList.tsx";
import CategoryDetail from "@/components/categories/CategoryDetail.tsx";
import NotFoundPage from "@/components/pages/NotFound.tsx";
import ProductsList from "@/components/test/product/ProductsList.tsx";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "subcategories/:id",
                element: <CategoriesList />,
            },
            {
                path: "categories",
                element: <CategoriesList />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path:"products",
                element:<ProductsList/>
            },
            {
                path: "categories/:slug",
                element: <CategoryDetail />,
            },
            {
                path: "*",
                element: <NotFoundPage />,
            },
        ],
    },
]);
//
// import {createBrowserRouter} from "react-router";
// import CategoriesList from "@/components/categories/CategoriesList.tsx";
//
// export const routes = createBrowserRouter([
//     {
//         path:'/',
//         element: <CategoriesList/>
//     },
//     {
//         path:'about',
//         element:<>About Page</>
//     },
//     {
//         path:'contacts',
//         element:<>Contacts</>
//     }
// ])