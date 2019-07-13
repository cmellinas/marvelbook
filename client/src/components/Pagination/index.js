import React from 'react';
import PropTypes from 'prop-types';

import './Pagination.css';

function PaginationItem({ index, isActive, onClick }) {
  return (
    <li className={'pagination_item ' + (isActive ? 'active' : '')} key={index}>
      {index === '...' || isActive ? (
        <span>{index}</span>
      ) : (
        <button onClick={() => onClick(index)} type="button">
          {index}
        </button>
      )}
    </li>
  );
}
function Pagination({ nbPages, page, setPage }) {
  const items = [];

  // TODO: improve
  if (nbPages > 7) {
    const midPage = nbPages % 2 === 0 ? nbPages / 2 : (nbPages - 1) / 2;
    const initialI = page < midPage ? (page > 1 ? page - 1 : page) : 1;
    const initialJ =
      page >= midPage && page < nbPages - 1 ? page - 1 : nbPages - 2;

    for (var i = initialI; i <= initialI + 2; i++) {
      items.push(
        <PaginationItem index={i} isActive={page === i} onClick={setPage} />
      );
    }

    items.push(<PaginationItem index="..." />);

    for (var j = initialJ; j <= initialJ + 2; j++) {
      items.push(
        <PaginationItem index={j} isActive={page === j} onClick={setPage} />
      );
    }
  } else {
    for (var k = 1; k <= nbPages; k++) {
      items.push(
        <PaginationItem index={k} isActive={page === k} onClick={setPage} />
      );
    }
  }

  return <ul className="pagination">{items}</ul>;
}

Pagination.propTypes = {
  nbPages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired
};

export default React.memo(Pagination);
