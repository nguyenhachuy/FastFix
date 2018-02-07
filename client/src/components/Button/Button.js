import React from "react";
import '../style/Style.css'
// Destructuring the type, className, children and onClick props, applying them to the button element
const Button = ({ type = "default", className, children, onClick, link }) => (
  <a
    onClick={onClick}
    className={["btn", `btn-${type}`, className].join(" ")}
    href={link}
  >
    {children}
  </a>
);

export default Button;
