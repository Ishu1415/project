import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>Netflix Clone &copy; {new Date().getFullYear()}</p>
      <p>Built with React and TMDb API</p>
    </footer>
  );
}
export default Footer