import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import Profile from './pages/Profile.jsx'
import SignupPage from './pages/SignupPage.jsx'
import Esun from './pages/Esun.jsx'
import Search from './pages/Search.jsx'


const router = createBrowserRouter([
{
    element: <App />,
    children: [
    {
        path: "/home",
        element: <HomePage />
    },
    {
        path: "/profile",
        element: <Profile />
    },
    {
        path: "/signup",
        element: <SignupPage />
    },
    {
        path: "/profile/esun",
        element : <Esun/>
    },
    {
        path: "/search",
        element: <Search/>
    }

    ],
},
{
    path: "/",
    element: <Navigate to="/login" />
},
{
    path: "/login",
    element: <LoginPage />
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <RouterProvider router={router} />
</React.StrictMode>,
)