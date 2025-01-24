import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from '../components/header/Header';
import SearchPage from '../components/searchPage/searchPage';
import SignIn from '../components/RegistrationAndLogin/SignIn';
import SignUp from '../components/RegistrationAndLogin/SignUp';
import AboutUs from '../components/AbtAndContact/AboutUs';
import Contact from '../components/AbtAndContact/Contact';

const AppRouter = () => {
  const [showSignIn, setShowSignIn] = useState(true);
  
  // Custom component to handle conditional rendering of header
  const Layout = ({ children }) => {
    const location = useLocation();
    const hideHeaderPaths = ['/', '/signin', '/signup'];
    
    return (
      <>
        {!hideHeaderPaths.includes(location.pathname) && <Header />}
        {children}
      </>
    );
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <div style={{ textAlign: 'center', marginTop: '50px' }}>
                {showSignIn ? (
                  <SignIn setShowSignIn={setShowSignIn} />
                ) : (
                  <SignUp setShowSignIn={setShowSignIn} />
                )}
              </div>
            }
          />
          <Route path="/signin" element={<SignIn setShowSignIn={setShowSignIn} />} />
          <Route path="/signup" element={<SignUp setShowSignIn={setShowSignIn} />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />

          {/* Add other routes here */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
