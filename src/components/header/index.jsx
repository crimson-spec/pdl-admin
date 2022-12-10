import React from 'react';
import Logo from '../../assets/images/logo.png';
import { AreaHeader } from './style';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import { useAuth } from '../../contexts/AuthContext';

const Header = () => {
  const { signout } = useAuth();
  return (
    <AreaHeader>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="nav">
          <Navbar />
        </div>
        <div className="user">
          <Link to="/" onClick={signout}>
            <p>Sair</p>
          </Link>
        </div>
      </div>
    </AreaHeader>
  );
};

export default Header;
