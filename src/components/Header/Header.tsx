import React from 'react';

function Header() {
  return (
    <header>
      <div>
        <div>
          <a href="/">HOME</a>
          <a href="/">ABOUT</a>
          <a href="/">CONTACT</a>
        </div>
        <div>
          <a href="/">Facebook</a>
          <a href="/">Twitter</a>
          <a href="/">Github</a>
        </div>
      </div>
      <div>
        <img src="./src/images/logo.png" alt="uk runner logo" />
      </div>
    </header>
  );
}

export default Header;
