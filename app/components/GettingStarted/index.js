/**
*
* GettingStarted
*
*/

import React from 'react';

import styles from './styles.css';

function GettingStarted() {
  return (
    <section className={ styles.gettingStarted }>
      <header className={ styles.header }>
        <h2 className={ styles.title }>Getting Started</h2>
      </header>
      <div className={ styles.content }>
				<div className={ styles.steps }>
					<p>Clone the boilerplate if you haven&apos;t downloaded it</p>
					<code className={ styles.codeBlock }>
						git clone https://github.com/react-boilerplate/react-boilerplate.git
					</code>
					<p>Run the setup to get everything up and running</p>
					<code className={ styles.codeBlock }>
						npm run setup
					</code>
					<p>And start the development server</p>
					<code className={ styles.codeBlock }>
						npm start
					</code>
				</div>
        <p className={ styles.closingStatement }>Now you can go to <code className={ styles.code }>localhost:3000</code> and see your app!</p>
      </div>
    </section>
  );
}

export default GettingStarted;
