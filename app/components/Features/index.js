/**
*
* Features
*
*/

import React from 'react';

import Icon from 'Icon'

import styles from './styles.css';

function Features() {
  return (
    <div className={ styles.features }>
      <h2>Features</h2>

      <section>
        <h3><Icon type="ram" className={ styles.icon }/>Predictable State</h3>
        <p>Use Redux to take control of your application’s state and keep state mutations manageable. If you have it, the boilerplate works with the Chrome Redux DevTools extension to allow you to see, play back, and change your action history!</p>
      </section>

      <section>
        <h3><Icon type="infinite-loop" className={ styles.icon }/> Instant Feedback</h3>
        <p>Enjoy the best DX and code your app at the speed of thought! Your saved changes to the CSS and JS are reflected instantaneously without refreshing the page. Preserve application state even when you update something in the underlying code!</p>
      </section>

      <section>
        <h3><Icon type="tools" className={ styles.icon }/> Next Generation JavaScript</h3>
        <p>Stop worrying about browser support and use features like template strings, object destructuring, arrow functions, JSX syntax, and more today!</p>
      </section>

      <section>
        <h3><Icon type="design-mug" className={ styles.icon }/> Next Generation CSS</h3>
        <p>Write composable CSS that’s co-located with your components for complete modularity. Unique generated class names keep the specificity low while eliminating style clashes. Ship only the styles that are on the page for the best performance.</p>
      </section>

      <section>
        <h3><Icon type="flowchart" className={ styles.icon }/> Industry-standard routing</h3>
        <p>It’s natural to want to add pages (e.g. `/about`) to your application, and routing makes this possible.</p>
      </section>

      <section>
        <h3><Icon type="tetris" className={ styles.icon }/> Quick Scaffolding</h3>
        <p>Automate the creation of components, containers, routes, selectors and sagas - and their tests - right from the CLI! Avoid fighting the glue of your code and focus on your app!</p>
      </section>

      <section>
        <h3><Icon type="offline" className={ styles.icon }/> Offline-first</h3>
        <p>The next frontier in performant web apps: availability without a network connection from the instant your users load the app.</p>
      </section>
    </div>
  );
}

export default Features;
