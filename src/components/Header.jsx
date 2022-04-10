import React from "react";

function Header({ data }) {
  return (
    <nav class="navbar navbar-light bg-light mb-5 ">
      <div class="container-fluid">
        <a class="navbar-brand">E-Çözüm</a>
        <span>{data.fullName}</span>
      </div>
    </nav>
  );
}

export default Header;
