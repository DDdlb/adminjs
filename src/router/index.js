import { Home } from "../views/Home";
import { Login } from "../views/login/login";
import { Register } from "../views/register";

export const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },{
        path: '/register',
        element: <Register />
    }
]