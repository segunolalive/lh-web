import React from "react";
import Logo from "../../logo-light.svg";

export const NavBar = () => {
  return (
    <nav className="menu-classic menu-fixed menu-transparent menu-one-page align-right light" data-menu-anima="fade-bottom" data-scroll-detect="true">
        <div className="container">
            <div className="menu-brand">
                <a href="/">
                    <img className="logo-default" src={Logo} alt="logo" />
                    <img className="logo-retina" src={Logo} alt="logo" />
                </a>
            </div>
            <i className="menu-btn"></i>
            <div className="menu-cnt">
                <div className="menu-right">
                    <div className="menu-custom-area">
                        <a className="btn btn-xs btn-circle" href="/">Purchase now</a>
                    </div>
                </div>
                <div className="clear"></div>
            </div>
        </div>
    </nav>
  );
}
