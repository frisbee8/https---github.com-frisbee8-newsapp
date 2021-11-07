import logo from './logo.svg';
import './App.css';
import React,{ Suspense, useState, useEffect } from 'react';
import NewsCard from './NewsCard';

function App() {
  const [books, setBooks] = useState(null);

  // + adding the use
  useEffect(() => {
    getData();

    // we will use async/await to fetch this data
    async function getData() {
      const res = await fetch("https://saurav.tech/NewsAPI/everything/cnn.json");
      const data = await res.json();

      // store the data into our books variable
      setBooks(data) ;
    }
  }, []); // <- you may need to put the setBooks function in this array

  const LoadCard = React.lazy(() => import('./NewsCard'));

  return (
    <div>
      <h3 style={{textAlign:'center'}}>Welcome to a CNN news feed</h3>
      <Suspense fallback={'Loading...'}>
        <LoadCard books={books}/>
      </Suspense>
    </div>
  )
}

export default App;
