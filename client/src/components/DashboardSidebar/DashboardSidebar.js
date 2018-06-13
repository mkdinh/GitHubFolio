import React from "react";
import "./DashboardSidebar.css";
// import logo from './client/public/images/githubfoliologo.png';

// var logo = require('./client/public/images/githubfoliologo.png');

export const DashboardSidebar = props => (
  <div className="sidenav">
    <div className='container'>
      <img src='/images/githubfoliologo.png'/>
      <a href="/dashboard/templates" className='sidenavText'>Templates<i className="fas fa-caret-right arrowPad"></i></a><hr />
      <a href="/dashboard/myportfolio" className='sidenavText'>My Portfolio<i className="fas fa-caret-right arrowPad"></i></a><hr />
      <a href="#" className='sidenavText'>Git Pinned Repos<i className="fas fa-caret-right arrowPad"></i></a><hr />
      <a href="/dashboard/edit" className='sidenavText'>Edit Portfolio<i className="fas fa-caret-right arrowPad"></i></a><hr />
      <a href="/" className='btn btn-secondary center-block logout'>Logout</a>
    </div>
  </div>
);


