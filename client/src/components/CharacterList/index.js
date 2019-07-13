import React from 'react';
import PropTypes from 'prop-types';

import Character from './../Character';
import './CharacterList.css';

function CharacterList({ characters }) {
  const characterList = characters.map(character => {
    const { id, name, thumbnail } = character;
    return (
      <Character
        key={id}
        name={name}
        photo={thumbnail.path + '.' + thumbnail.extension}
      />
    );
  });

  return <ul className="character_list">{characterList}</ul>;
}

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired
};

export default React.memo(CharacterList);
