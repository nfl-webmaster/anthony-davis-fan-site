/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';

export default class Contact extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="contact-page">
        <Helmet>
          <title>Contact Page</title>
          <meta
            name="description"
            content="Contact page of Anthony Davis Fans Page"
          />
        </Helmet>
        <h1>Contact</h1>
        <ul>
          <li>
            <p className="title">How can you reach us?</p>
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
