import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from '../components/new/Footer/Footer.js';
import Header from '../components/new/Header/Header';
import Login from '../components/new/Login/Login';
import NotFound from '../components/new/NotFound/NotFound';
import AboutUs from '../components/new/pages/AboutUs/AboutUs';
import Contact from '../components/new/pages/Contact/Contact';
import Doctors from '../components/new/pages/Doctors/Doctors';
import Home from '../components/new/pages/Home/Home';
import Services from '../components/new/pages/Services/Services';
import SingleDoctorDetail from '../components/new/pages/SingleDoctorDetail/SingleDoctorDetail';
import SingleServiceDetails from '../components/new/pages/SingleServiceDetails/SingleServiceDetails';
import PrivateRoute from '../components/new/routes/PrivateRoute';
import SignUp from '../components/new/SignUp/SignUp';
import AuthProvider from '../components/contexts/AuthProvider';

function NursingHomeWebsite() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/pro-website" element={<Home />} />
            <Route path="/pro-about-us" element={<AboutUs />} />
            <Route path="/pro-services" element={<Services />} />
            <Route path="/pro-doctors" element={<Doctors />} />
            <Route path="/pro-contact" element={<Contact />} />
            <PrivateRoute path="/doctors/:id" element={<SingleDoctorDetail />} />
            <PrivateRoute path="/services/:id" element={<SingleServiceDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default NursingHomeWebsite;
