/**
*
* Features
*
*/

import React from 'react';

import H2 from 'H2';

import styles from './styles.css';

function Features() {
  return (
    <div className={ styles.container }>
      <H2>Supporters</H2>
      <a href="http://reactjsprogram.com/?utm_source=react-boilerplate&utm_medium=banner&utm_campaign=React%20Boilerplate">
        <img className={ styles.image } src="https://cloud.githubusercontent.com/assets/7525670/16642421/09f0d97c-440b-11e6-92f6-05d680946629.png" alt="React.js Program – A linear approach to learning the React.js ecosystem!" />
      </a>
    </div>
  );
}

export default Features;
