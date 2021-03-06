import React from 'react';
import { withRouter } from 'react-router-dom';
import Link from '../asyncLink';

const NavItem = ({ children, to, location }) => ( // eslint-disable-line react/prop-types
  <li className="nav-item" key={to}>
    <Link className={`nav-link${location.pathname.match(new RegExp(`^${to}(/?page/[0-9]+)?$`)) ? ' active' : ''}`} to={to}>{children}</Link>
  </li>
);

export default withRouter(NavItem);
