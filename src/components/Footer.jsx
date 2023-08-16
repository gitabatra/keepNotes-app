import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} | Created by Gita Batra</p>
    </footer>
  );
}

export default Footer;
