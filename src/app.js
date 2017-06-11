import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HashLink } from 'react-router-hashlink';
import { override } from 'smoothscroll-polyfill';

class Index extends React.Component {
  render() {
    return (
      <main>
        <section id="top">
          <h1>
            <a href="https://github.com/1000ch/react-router-hashlink">react-router-hashlink</a>
          </h1>
          <p>Scroll behavior in this demo is configured by <a href="https://drafts.csswg.org/cssom-view/#dom-element-scrollintoview"><code>scrollIntoView()</code></a> via <code>&lt;HashLink&gt;</code>.</p>
          <p><a href="http://iamdustan.com/smoothscroll/">smoothscroll</a> polyfill for <code>scrollIntoView()</code> is awesome, and there is also <a href="https://github.com/1000ch/smoothscroll">forked one</a> to override current browser implementation.</p>
          <ul>
            <li>
              <HashLink to="#top">
                <code>to="#top"</code>
              </HashLink>
            </li>
            <li>
              <HashLink to="#1" behavior="smooth">
                <code>to="#1" behavior="smooth"</code>
              </HashLink>
            </li>
            <li>
              <HashLink to="#2" delay={500}>
                <code>to="#2" delay=500</code>
              </HashLink>
            </li>
            <li>
              <HashLink to="#3" behavior="smooth" delay={500}>
                <code>to="#3" behavior="smooth" delay=500</code>
              </HashLink>
            </li>
          </ul>
        </section>
        <section id="1">
          <h1>#1</h1>
          <ul>
            <li>
              <HashLink to="#top">
                <code>to="#top"</code>
              </HashLink>
            </li>
            <li>
              <HashLink to="#1" behavior="smooth">
                <code>to="#1" behavior="smooth"</code>
              </HashLink>
            </li>
            <li>
              <HashLink to="#2" delay={500}>
                <code>to="#2" delay=500</code>
              </HashLink>
            </li>
            <li>
              <HashLink to="#3" behavior="smooth" delay={500}>
                <code>to="#3" behavior="smooth" delay=500</code>
              </HashLink>
            </li>
          </ul>
        </section>
        <section id="2">
          <h1>#2</h1>
          <ul>
            <li>
              <HashLink to="#top">
                <code>to="#top"</code>
              </HashLink>
            </li>
            <li>
              <HashLink to="#1" behavior="smooth">
                <code>to="#1" behavior="smooth"</code>
              </HashLink>
            </li>
            <li>
              <HashLink to="#2" delay={500}>
                <code>to="#2" delay=500</code>
              </HashLink>
            </li>
            <li>
              <HashLink to="#3" behavior="smooth" delay={500}>
                <code>to="#3" behavior="smooth" delay=500</code>
              </HashLink>
            </li>
          </ul>
        </section>
        <section id="3">
          <h1>#3</h1>
          <ul>
            <li>
              <HashLink to="#top">
                <code>to="#top"</code>
              </HashLink>
            </li>
            <li>
              <HashLink to="#1" behavior="smooth">
                <code>to="#1" behavior="smooth"</code>
              </HashLink>
            </li>
            <li>
              <HashLink to="#2" delay={500}>
                <code>to="#2" delay=500</code>
              </HashLink>
            </li>
            <li>
              <HashLink to="#3" behavior="smooth" delay={500}>
                <code>to="#3" behavior="smooth" delay=500</code>
              </HashLink>
            </li>
          </ul>
        </section>
      </main>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  override();

  ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/react-router-hashlink-demo/" component={Index} />
      </Switch>
    </BrowserRouter>,
    document.getElementById('app')
  );
});
