import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Table from './Table'; // Assuming your component file is named "Table"

const App = () => {
  const [query, setQuery] = useState( '' );
  const [data, setData] = useState( [] );

  useEffect( () => {
    const fetchUsers = async () => {
      const res = await axios.get( `http://localhost:5000/?q=${query}` );
      setData( res.data );
    };

    if ( query.length === 0 || query.length > 2 ) {
      fetchUsers();
    }
  }, [query] );

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search..."
        onChange={ ( e ) => setQuery( e.target.value ) }
      />
      <Table data={ data } />
    </div>
  );
};

export default App;
