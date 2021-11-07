import React,{ useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function RandomDog() {
    const [dog, setDog] = useState();
    const [refresh,setRefresh] = useState();
    useEffect(() => {
          getData();
          async function getData() {
          const res = await fetch("https://random.dog/woof.json");
          const data = await res.json();
          setDog(data) ;
        }
    }, [refresh]);

    const Refres = () => {
      if (dog.url.slice(-3)==="mp4" || dog.fileSizeBytes>1300000) {
        // console.log(dog.url," ",dog.fileSizeBytes/1000000);
        setTimeout(() => {setRefresh(!refresh)},500)}
      return null
    }
        
    return(
    <div>
        <div style={{paddingLeft:'20pt',paddingRight:'20pt'}}>
          <Grid container spacing={1.5} alignItems='center'>
            {dog && (
              <Grid item xs={12} sm={7}>
                <Paper  
                  style={{paddingLeft:'15pt',
                  paddingRight:'15pt',
                  paddingTop:'7pt',
                  paddingBottom:'7pt',
                  backgroundColor:'#f9f9f9'}}>
                  <img src={dog.url} width={'100%'}/>       
                  <Refres/>
                </Paper>
              </Grid>
            )}
          </Grid>
        </div>
    </div>
    )
}

export default RandomDog