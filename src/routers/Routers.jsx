import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout";
import Main from "../layouts/Main";
import NewsLayout from "../layouts/NewsLayout";
import Category from "../Pages/Home/Category/Category";
import Login from "../Pages/Login/Login";
import News from "../Pages/News/News";
import Register from "../Pages/Register/Register";
import ProtectedRoute from "../protectedRoute/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to={"category/0"} />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "category",
    element: <Main />,

    children: [
      // {
      //   path: "/",
      //   element: <Category />,
      //   loader: () => fetch(`https://dragon-news-server-mahamudulhasan-me.vercel.app/news`),
      // },
      {
        path: ":id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(
            `https://dragon-news-server-mahamudulhasan-me.vercel.app/categories/${params.id}`
          ),
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout />,
    children: [
      {
        path: ":id",
        element: (
          <ProtectedRoute>
            <News />
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://dragon-news-server-mahamudulhasan-me.vercel.app/news/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
