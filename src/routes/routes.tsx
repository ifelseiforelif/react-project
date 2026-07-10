import { createBrowserRouter } from "react-router";

import Layout from "@/components/layout/Layout";

import Home from "@/components/pages/Home";
import About from "@/components/pages/About";
import CategoriesList from "@/components/categories/CategoriesList";
import CategoryDetail from "@/components/categories/CategoryDetail.tsx";
import NotFoundPage from "@/components/pages/NotFound";

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
                path: "categories",
                element: <CategoriesList />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "categories/:id",
                element: <CategoryDetail />,
            },
            {
                path: "*",
                element: <NotFoundPage />,
            },
        ],
    },
]);