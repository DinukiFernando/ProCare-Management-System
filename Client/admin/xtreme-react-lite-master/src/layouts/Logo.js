import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/images/logos/logo.jpg';

const Logo = () => {
  return (
    <Link to="/">
      <img src={logoImage} alt="Logo" width={"150px"} height={"50px"}/>
    </Link>
  );
};

export default Logo;

