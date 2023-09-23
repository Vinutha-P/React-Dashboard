import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainDashboard = () => {
  return (
   <div>
     <Header />
    <h1>Main Admin  Dashboard</h1>
    <Link to="/dashboard">
        <button>Go to Dashboard</button>
      </Link>
    <Footer />
   </div>
  )
}

export default MainDashboard