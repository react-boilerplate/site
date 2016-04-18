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
import Logo from './react-boilerplate-logo.svg'

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
          <Button outlined icon="github-logo" href="https://github.com/mxstbr/react-boilerplate">Source</Button>
          <Button icon="download" href="https://github.com/mxstbr/react-boilerplate/archive/master.zip">Download</Button>
          <Button outlined icon="book">Docs</Button>
        </nav>
        <header className={ styles.header }>
          <Logo />
          <p>Quick setup for new performance orientated, offline–first React.js applications</p>
        </header>
        <article className={ styles.content }>
          <GettingStarted />
          <Features />
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
