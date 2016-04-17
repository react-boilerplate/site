/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import shouldPureComponentUpdate from 'react-pure-render/function';

import { createSelector } from 'reselect';
import usernameSelector from 'usernameSelector';
import reposSelector from 'reposSelector';
import loadingSelector from 'loadingSelector';
import errorSelector from 'errorSelector';

import { changeUsername } from './actions';
import { loadRepos } from '../App/actions';

import Button from 'Button';
import H2 from 'H2';
import Icon from 'Icon';
import List from 'List';
import ListItem from 'ListItem';
import GettingStarted from 'GettingStarted';
import Features from 'Features';
import Contribute from 'Contribute';
import LoadingIndicator from 'LoadingIndicator';
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

  /**
   * Changed route to '/features'
   */
  openFeaturesPage = () => {
    this.openRoute('/features');
  };

  render() {
    let mainContent = null;

    // Show a loading indicator when we're loading
    if (this.props.loading) {
      mainContent = (<List component={LoadingIndicator} />);

    // Show an error if there is one
    } else if (this.props.error !== false) {
      const ErrorComponent = () => (
        <ListItem content={'Something went wrong, please try again!'} />
      );
      mainContent = (<List component={ErrorComponent} />);

    // If we're not loading, don't have an error and there are repos, show the repos
    } else if (this.props.repos !== false) {
      mainContent = (<List items={this.props.repos} component={RepoListItem} />);
    }

    return (
      <main className={ styles.homePage }>
        <nav className={ styles.nav } >
          <Button outlined icon='github-logo'>Source</Button>
          <Button icon='download'>Download</Button>
          <Button outlined icon='book'>Docs</Button>
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
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    changeRoute: (url) => dispatch(push(url)),
    onSubmitForm: (evt) => {
      evt.preventDefault();
      dispatch(loadRepos());
    },

    dispatch,
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(createSelector(
  reposSelector(),
  usernameSelector(),
  loadingSelector(),
  errorSelector(),
  (repos, username, loading, error) => ({ repos, username, loading, error })
), mapDispatchToProps)(HomePage);
