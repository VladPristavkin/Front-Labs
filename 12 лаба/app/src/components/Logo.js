import React from "react";
import AutoServiceLogo from "../assets/images/logo.png";

function Logo({ className, onClick }) {
  return (
    <img
      src={AutoServiceLogo}
      className={className}
      onClick={onClick}
      alt="Autoservice-logo"
    />
  );
}

export default Logo;