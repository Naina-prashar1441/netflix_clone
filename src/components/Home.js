import React from 'react'
import { useState, useEffect } from "react";
import {Box, Card, CardContent, CardMedia, Grid } from "@mui/material"
import { Link } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore'


function Home()  {

    const [movies,setMovies] = useState([])

    const getMovie = () =>{
        try{
            fetch("https://api.themoviedb.org/3/discover/movie?api_key=49311acf60784708804ea40ff2c355c0")
        .then(res => res.json())
        .then(json => setMovies(json.results))
        }catch(err){
            console.err(err)
        }
    }
    
    
    useEffect(()=>{
        getMovie()
    },[])


    

  return (
    <div style={{backgroundColor:"#181818"}}>

    <Grid container spacing={2} style={{paddingTop:"20px", paddingRight:"20px", paddingLeft:"20px"}}>
    {movies.map((movie)=>{
      
        return <Grid item xs={3}>
          <Box>

          <Link to="/movieDetail" state={{movie:movie}}>
        <Card>
        
          <CardMedia
             component="img"
             height="140"
             image={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}>
          </CardMedia>
        
        </Card>
        </Link>
        </Box>
        </Grid>
    })}
    </Grid>
    </div>
  )
}

export default Home
