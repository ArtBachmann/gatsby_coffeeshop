import React from "react";

const Footer = () => {
  return (
    <footer className="footer py-3">
      <div className="col-10 mx-auto col-md-6 text-yellow text-center text-capitalize">
        <h3>
          all rights reserved &copy; {new Date().getFullYear().toString()}{" "}
        </h3>
      </div>
    </footer>
  );
};

export default Footer;