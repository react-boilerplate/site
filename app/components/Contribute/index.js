/**
*
* Contribute
*
*/

import React from 'react';

import Button from 'Button';
import styles from './styles.css';

function Contribute() {
  return (
    <section className={ styles.contribute }>
      <h2>Want to contribute?</h2>
      <p>React Boilerplate is an evolving project. Our goal is to provide the most up to date React Boilerplate for anyone to use. If you have any ideas or suggestions, please contribute.</p>
      <Button className={styles.button} href="https://github.com/react-boilerplate/react-boilerplate/blob/master/CONTRIBUTING.md">Start Contributing</Button>
    </section>
  );
}

export default Contribute;
