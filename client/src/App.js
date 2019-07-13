import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { API_URL, API_LIMIT } from './constants';
import CharacterList from './components/CharacterList';
import Pagination from './components/Pagination';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [nbPages, setNbPage] = useState(1);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');

  // We retrieve data from our server
  useEffect(() => {
    const offset = (page - 1) * API_LIMIT;

    axios
      .get(API_URL + `?limit=${API_LIMIT}&offset=${offset}`)
      .then(res => {
        const { results, total } = res.data;
        setCharacters(results);
        setNbPage(Math.ceil(total / API_LIMIT));
        setTotal(total);
      })
      .catch(error => {
        setErrorMsg(
          'We are not able to retrieve Marvel character list. Please retry later.'
        );
      });
  }, [page]); // Relaunch API each time page value change

  return (
    <div className="app">
      <h1>Marvel character list ({total})</h1>
      {errorMsg && <div className="error_msg">{errorMsg}</div>}
      {characters.length > 0 && <CharacterList characters={characters} />}
      {nbPages > 1 && (
        <Pagination page={page} nbPages={nbPages} setPage={setPage} />
      )}
    </div>
  );
}

export default App;
