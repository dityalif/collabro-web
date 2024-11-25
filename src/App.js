import React from 'react';
import Navbar from './components/Navbar';

function HomePage() {
  return (
    <div>
      <Navbar />
      <header className='items-center text-center'>
        <h1 className='text-green-800'>Welcome to Collabro</h1>
      </header>
      <main>
        <p>This is a simple homepage for Collabro.</p>
      </main>
      <footer>
        <p>&copy; 2023 Collabro. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;