/**
 *
 * Button.react.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React from 'react';

import styles from './styles.css';
import Icon from 'Icon'

function Button(props) {
  let classNames = [ styles.button ]

  if (props.outlined) classNames.push(styles.button_outlined);
  else classNames.push(styles.button_default);
  if (props.collapsable) classNames.push(styles.button_collapsable);
  if (props.className) classNames.push(props.className);

  let icon = props.icon ? <Icon type={props.icon} className={styles.icon}/> : null

  return props.handleRoute ?
    // If the Button has a handleRoute prop, we want to render a button
    <button className={classNames.join(' ')} onClick={ props.handleRoute }>{icon}<span className={styles.text}>{props.children}</span></button> :
    // Render an anchor tag
    <a className={classNames.join(' ')} href={props.href} onClick={props.onClick}>{icon}<span className={styles.text}>{props.children}</span></a>
}

Button.propTypes = {
  className: React.PropTypes.string,
  outline: React.PropTypes.bool,
  collapsible: React.PropTypes.bool,
  handleRoute: React.PropTypes.func,
  href: React.PropTypes.string,
  onClick: React.PropTypes.func,
};

export default Button;
