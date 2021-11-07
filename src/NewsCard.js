import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function NewsCard(prop) {
    return(
    <div>
      {prop.books && (
        <div style={{paddingLeft:'20pt',paddingRight:'20pt'}}>
          <Grid container spacing={1.5} alignItems='center'>
            {prop.books.articles.map((book, index) => (
              <Grid item xs={12} sm={6} md={4}>
                <Paper key={index} 
                  style={{paddingLeft:'15pt',
                  paddingRight:'15pt',
                  paddingTop:'7pt',
                  paddingBottom:'7pt',
                  backgroundColor:'#f9f9f9'}}>
                  <a href={book.url} 
                  target="_blank" 
                  style={{textDecoration: 'none'}}>
                    <img src={book.urlToImage} width={'100%'}/>
                    {book.title} 
                    <span style={{fontSize:'10pt',color:'gray'}}>
                    &nbsp;&nbsp;{book.publishedAt.substring(0,10)}
                    </span>
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

export default NewsCard