import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainDashboard = () => {
  return (
   <div style={{textAlign:'center'}}>
     <Header />
    <h1>Main Admin  Dashboard</h1>
      <button>Go to Admin Principal Dashboard</button>
      <button>Go to Admin Teacher Dashboard</button>
    <Footer />
   </div>
  )
}

export default MainDashboard