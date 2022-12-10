import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

import Header from '../components/header';
import Footer from '../components/footer';

const PrivateRoute = ({ Item }) => {
  const { loadingStorage, isSigned } = useAuth();
  if (loadingStorage) {
    return <h1>Loading...</h1>;
  }

  if (isSigned) {
    return (
      <>
        <Header />
        <Item />
        <Footer />
      </>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
