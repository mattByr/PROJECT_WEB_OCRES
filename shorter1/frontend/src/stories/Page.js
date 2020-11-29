import React from 'react';
import PropTypes from 'prop-types';

import App from '../components/dashboard/dashboard';

import { Header } from './Header';
import './page.css';
import WidgetChrono from '../components/WidgetChrono/WidgetChrono';

export const Page = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <article>
    <Header user={user} onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount} />

    
  </article>
);
export const widget = () =><WidgetChrono />;

Page.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Page.defaultProps = {
  user: null,
};
