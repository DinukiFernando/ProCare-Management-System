import React from 'react';


const Footer = () => {
  return (

        <footer className="bg-light text-center text-lg-start">
          <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', color: 'white' }}>
            © {new Date().getFullYear()} MDBootstrap.com
          </div>
        </footer>

  );
};

export default Footer;
