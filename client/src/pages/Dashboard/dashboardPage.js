import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { DashboardContainer } from "../../containers/DashbboardContainer/DashboardContainer.js";
// import { Wrapper } from '../../components/Wrapper/Wrapper.js';
import { DashboardSidebar } from '../../components/DashboardSidebar/DashboardSidebar.js';
import { PreviewPage } from '../../components/PreviewPage/PreviewPage.js';
import { TemplatePage } from '../../components/TemplatePage/TemplatePage.js';
import { GitPinnedReposPage } from '../../components/GitPinnedReposPage/GitPinnedReposPage.js';
import { DashboardEditUser } from '../../components/DashboardEditUser/DashboardEditUser.js';
import { DashboardEditRepos } from '../../components/DashboardEditRepos/DashboardEditRepos.js';

export const DashboardPage = (props) => (
  <div className='col-lg-10 offset-lg-2'>
    <div className=''>
    <DashboardSidebar />
    </div>
    <DashboardContainer />
 </div>
);


