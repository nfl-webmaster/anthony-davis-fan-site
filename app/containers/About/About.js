/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';

export default class FeaturePage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="about-page">
        <Helmet>
          <title>About Page</title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>
        <h1>About</h1>
        <ul>
          <li>
            <p className="title">What do we do?</p>
            <p>
              Egestas integer eget aliquet nibh praesent. Bibendum neque egestas congue quisque egestas diam in arcu. Aliquam sem et tortor consequat id porta nibh. Semper risus in hendrerit gravida. Nam aliquam sem et tortor consequat id porta.
            </p>
          </li>
          <li>
            <p className="title">Instant feedback</p>
            <p>
              Egestas integer eget aliquet nibh praesent. Bibendum neque egestas congue quisque egestas diam in arcu. Aliquam sem et tortor consequat id porta nibh. Semper risus in hendrerit gravida. Nam aliquam sem et tortor consequat id porta.
            </p>
          </li>
          <li>
            <p className="title">Industry-standard routing</p>
            <p>
              {
                "Write composable CSS that's co-located with your components for complete modularity. Unique generated class names keep the specificity low while eliminating style clashes. Ship only the styles that are on the page for the best performance."
              }
            </p>
          </li>
          <li>
            <p className="title">The Best Test Setup</p>
            <p>
Egestas integer eget aliquet nibh praesent. Bibendum neque egestas congue quisque egestas diam in arcu. Aliquam sem et tortor consequat id porta nibh. Semper risus in hendrerit gravida. Nam aliquam sem et tortor consequat id porta. 
            </p>
          </li>
        </ul>
        <i>and much more...</i>
      </div>
    );
  }
}
