import logo from './logo.svg';
import './App.css';
import React,{ Suspense, useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import RandomDog from './RandomDog';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AppBar from '@mui/material/AppBar';

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

  const [tab, setTab] = useState(0);
  const handleTabChange = (event, newtab) => {
    setTab(newtab);
  };

  const LoadCard = React.lazy(() => import('./NewsCard'));

  return (
    <div>
      <h3 style={{textAlign:'center'}}>Welcome to a CNN news feed</h3>
      <AppBar color="transparent" position="static">
      <Tabs value={tab} onChange={handleTabChange}>
          <Tab label="CNN"  />
          <Tab label="Dog"  />
      </Tabs>
      </AppBar>
      <div hidden={tab!==0}>
        <Suspense fallback={'Loading...'}>
          <LoadCard books={books}/>
        </Suspense>
      </div>
      <div hidden={tab!==1}>
        <RandomDog/>
      </div>
    </div>
  )
}

export default App;
