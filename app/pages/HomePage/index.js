/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import shouldPureComponentUpdate from 'react-pure-render/function';

import Button from 'Button';
import GettingStarted from 'GettingStarted';
import Features from 'Features';
import Contribute from 'Contribute';
import Supporters from 'Supporters';
import Logo from './react-boilerplate-logo.svg';

import styles from './styles.css';

export class HomePage extends React.Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  /**
   * Changes the route
   *
   * @param  {string} route The route we want to go to
   */
  openRoute = (route) => {
    this.props.changeRoute(route);
  };

  render() {
    return (
      <main className={ styles.homePage }>
        <nav className={ styles.nav } >
          <Button icon="download" outlined collapsable href="https://github.com/react-boilerplate/react-boilerplate/archive/master.zip">Download</Button>
          <Button icon="book" href="https://github.com/react-boilerplate/react-boilerplate/tree/master/docs">Documentation</Button>
          <Button icon="github-logo" outlined collapsable href="https://github.com/react-boilerplate/react-boilerplate">Source</Button>
        </nav>
        <header className={ styles.header }>
          <Logo className={ styles.logo } />
          <p>Quick setup for new performance orientated, offline–first React.js applications</p>
        </header>
        <article className={ styles.content }>
          <GettingStarted />
          <Features />
          <Supporters />
        </article>
        <Contribute />
      </main>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),

    dispatch,
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(null, mapDispatchToProps)(HomePage);
