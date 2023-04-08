import React from "react";

import { useRoutes } from "react-router-dom";
import AdminGuard from "../guards/AdminGuard";
import AuthGuard from "../guards/AuthGuard";
import NoAuthGuard from "../guards/NoAuthGuard";
import  AdminLayout  from "layouts/admin/AdminLayout";
import HomeLayout from "layouts/home/HomeLayout";
import Booking from "pages/booking/Booking";
import HomePage from "pages/home/HomePage";
import Login from "pages/login/Login";
import MovieDetail from "pages/movie-detail/MovieDetail";
import MovieManagement from "pages/movie-management/MovieManagement";
import MovieForm from "pages/movie-form/MovieForm";
import Register from "pages/register/Register";
import Account from "pages/account/Account";
import ShowtimeManagement from "pages/showtime-management/ShowTimeManagement";
import UserManagement from "pages/user-management/UserManagement";
import UserForm from "pages/user-form/UserForm";

export default function Router() {
  const routing = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/movie-detail/:id",
          element: <MovieDetail />,
        },
        {
          path: "/",
          element: <AuthGuard />,
          children: [
            {
              path: "/booking/:id",
              element: <Booking />,
            },
          ],
        },
        {
          path: "/",
          element: <NoAuthGuard />,
          children: [
            {
              path: "/login",
              element: <Login />,
            },
          ],
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/account/:user",
          element: <Account />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "/admin",
          element: <AdminGuard />,
          children: [
            {
              path: "/admin/movie-management",
              element: <MovieManagement />,
            },
            {
              path: "/admin/movie-management/add",
              element: <MovieForm />,
            },
            {
              path: "/admin/movie-management/edit/:id",
              element: <MovieForm />,
            },
            {
              path: "/admin/movie-management/showtime-management/add/:id",
              element: <ShowtimeManagement />,
            },
            {
              path: "/admin/user-management",
              element: <UserManagement />,
            },
            {
              path: "/admin/user-management/add",
              element: <UserForm />,
            },
            {
              path: "/admin/user-management/edit/:userId",
              element: <UserForm />,
            },
          
          ],
        },
      ],
    },
  ]);

  return routing;
}
