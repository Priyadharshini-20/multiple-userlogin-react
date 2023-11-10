import './App.css';
import React, { useEffect, useState } from 'react';

import {BrowserRouter as Router, Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import { Header, LoginForm, AdminDashboard, SubAdminDashboard, UserDashboard } from './components'

const Layout = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  
  return (
    <>
      {!isLoginPage && <Header />}
      {children}
    </>
  );
};

function App() {
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    setShowHeader(window.location.pathname !== '/');
  }, []);

  return (
    <div className="App">
       <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout showHeader={showHeader}>
              <Outlet />
            </Layout>
          }
        >
          <Route index element={<Navigate to="/login" />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="sub-admin" element={<SubAdminDashboard />} />
          <Route path="user" element={<UserDashboard />} />
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
