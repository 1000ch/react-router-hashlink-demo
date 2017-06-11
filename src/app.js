import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import { HashLink } from 'react-router-hashlink';
import { override } from 'smoothscroll-polyfill';

class Index extends React.Component {
  render() {
    return (
      <main>
        <section id="1">
          <h1>#1</h1>
          <HashLink to="#1" behavior="smooth">#1</HashLink>
          <HashLink to="#2" behavior="smooth">#2</HashLink>
          <HashLink to="#3" behavior="smooth">#3</HashLink>
        </section>
        <section id="2">
          <h1>#2</h1>
          <HashLink to="#1" behavior="smooth">#1</HashLink>
          <HashLink to="#2" behavior="smooth">#2</HashLink>
          <HashLink to="#3" behavior="smooth">#3</HashLink>
        </section>
        <section id="3">
          <h1>#3</h1>
          <HashLink to="#1" behavior="smooth">#1</HashLink>
          <HashLink to="#2" behavior="smooth">#2</HashLink>
          <HashLink to="#3" behavior="smooth">#3</HashLink>
        </section>
      </main>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  override();

  ReactDOM.render(
    <BrowserRouter>
      <Route exact path="/" component={Index} />
    </BrowserRouter>,
    document.getElementById('app')
  );
});
