import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

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

  return (
    <div>
      <h3 style={{textAlign:'center'}}>Welcome to a CNN news feed</h3>
      {books && (
        <div style={{paddingLeft:'20pt',paddingRight:'20pt'}}>
          <Grid container spacing={1.5} alignItems='center'>
          
          {books.articles.map((book, index) => (
            <Grid item xs={6} sm={4} md={3}>
            <Paper key={index} style={{paddingLeft:'15pt',paddingRight:'15pt',paddingTop:'7pt',paddingBottom:'7pt',backgroundColor:'#f9f9f9'}}>
              <a href={book.url} target="_blank" style={{textDecoration: 'none'}}>{book.title} 
               <span style={{fontSize:'10pt',color:'gray'}}> {book.publishedAt.substring(0,10)}</span>
              </a>
            </Paper>
            </Grid>
          ))}
          
          </Grid>
        </div>
      )}
    </div>
  )
}

export default App;
