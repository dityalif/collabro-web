import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { Outlet, ScrollRestoration, useLocation, useOutlet } from 'react-router-dom'
import AnimatedOutlet from './AnimatedOutlet';

function App() {

  const location = useLocation();
  const element = useOutlet();

  // Define routes where Navbar should not be displayed
  const noNavbarRoutes = ['/profile'];
  return (
    <>
      <AnimatedOutlet />
    </>
  );
}
export default App;