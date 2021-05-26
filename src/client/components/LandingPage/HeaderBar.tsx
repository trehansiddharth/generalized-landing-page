import React, { Component } from 'react';
import './HeaderBar.scss';

type HeaderBarProps = {
  logoUrl: string,
  companyName: string
};

const HeaderBar = (props: HeaderBarProps) => (
  <div id="header-bar">
    <a id="nav-logo-logotype" href="/">
      <img id="logo-svg" alt="logo" src={props.logoUrl} />
      <div id="logotype">{props.companyName}</div>
    </a>
  </div>
);

export default HeaderBar;