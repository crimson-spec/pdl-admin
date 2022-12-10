import React from 'react';
import { Link } from 'react-router-dom';
export default function ErrorPage() {
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        Click <Link to={'/'}>here</Link> to go back to Home Page.
      </p>
    </div>
  );
}
