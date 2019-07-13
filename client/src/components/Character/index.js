import React from 'react';
import PropTypes from 'prop-types';

import './Character.css';

function Character({ name, photo }) {
  return (
    <li className="character">
      <div className="character_image">
        <img alt={name} src={photo} />
      </div>

      <div className="character_name">{name}</div>
    </li>
  );
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired
};

export default React.memo(Character);
