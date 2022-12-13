import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import PrivateRoute from './private';
import Login from '../pages/others/login';
import ErrorPage from '../pages/others/error-page';

import OrdersReport from '../pages/reports/orders';

import ListProducts from '../pages/list/products';
import CreateUpdateProduct from '../pages/create-update/product';

import ListCategories from '../pages/list/categories';
import CreateUpdateCategory from '../pages/create-update/category';

import ListSectors from '../pages/list/sectors';
import CreateUpdateSector from '../pages/create-update/sector';

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
            element={<PrivateRoute Item={OrdersReport} />}
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
          <Route
            path="/list/categories"
            element={<PrivateRoute Item={ListCategories} />}
          />
          <Route
            exact
            path="/update/category/:id"
            element={<PrivateRoute Item={CreateUpdateCategory} />}
          />
          <Route
            exact
            path="/create/category"
            element={<PrivateRoute Item={CreateUpdateCategory} />}
          />
          <Route
            path="/list/sectors"
            element={<PrivateRoute Item={ListSectors} />}
          />
          <Route
            exact
            path="/update/sector/:id"
            element={<PrivateRoute Item={CreateUpdateSector} />}
          />
          <Route
            exact
            path="/create/sector"
            element={<PrivateRoute Item={CreateUpdateSector} />}
          />
          <Route exact path="/login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default RoutesApp;
