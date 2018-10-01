import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, body }) => (
  <div className="card">
    <h2>{title}</h2>
    <p>{body}</p>
  </div>
);

Article.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

export default Article;
