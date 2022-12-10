import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import PrivateRoute from './private';
import Login from '../pages/others/login';
import ErrorPage from '../pages/others/error-page';
import ListProducts from '../pages/list/products';
import CreateUpdateProduct from '../pages/create-update/product';

import Home from '../pages/others/home';

const RoutesApp = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<PrivateRoute Item={Home} />} />
          <Route
            exact
            path="/reports/orders"
            element={<PrivateRoute Item={ErrorPage} />}
          />
          <Route
            exact
            path="/list/products"
            element={<PrivateRoute Item={ListProducts} />}
          />
          <Route
            exact
            path="/update/product/:id"
            element={<PrivateRoute Item={CreateUpdateProduct} />}
          />
          <Route
            exact
            path="/create/product"
            element={<PrivateRoute Item={CreateUpdateProduct} />}
          />
          <Route exact path="/login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default RoutesApp;
