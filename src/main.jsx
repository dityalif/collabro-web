import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import Profile from './pages/Profile.jsx'
import SignupPage from './pages/SignupPage.jsx'


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
    }

    ],
},
{
    path: "/",
    element: <Navigate to="/home" />
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