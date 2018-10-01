import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name, phone, website, company }) => (
  <div className="user">
    <h2>{name}</h2>
    <ul>
      <li>
        <span role="img" aria-label="company">
          💼
        </span>
        {company && company.name}
      </li>
      <li>
        <span role="img" aria-label="phone">
          📱
        </span>
        {phone}
      </li>
      <li>
        <span role="img" aria-label="website">
          🌐
        </span>
        <a target="_blank" rel="noopener noreferrer" href={`http://${website}`}>
          {website}
        </a>
      </li>
    </ul>
  </div>
);

User.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  website: PropTypes.string,
  company: PropTypes.shape({
    name: PropTypes.string,
    catchPhrase: PropTypes.string,
  }),
};

export default User;
