import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import netflix from "../images/netflix.png"
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/setup';
import { signOut } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Navbar() {
  const logout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully", {
        theme: "dark"
      });
    } catch (err) {
      console.error(err);
    }
  }
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=49311acf60784708804ea40ff2c355c0");
      const data = await response.json();
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  }

  const signinClick = () => {
    navigate("/signin");
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movies[5]?.poster_path})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "500px", width: "100%" }}>
      <ToastContainer autoClose={2000} />
      <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
        <img style={{ width: "90px", height: "90px" }} src={netflix} />
        <div>
          {auth.currentUser?.emailVerified ? (
            <Button onClick={logout} variant='contained' color="error" sx={{ height: "40px", marginLeft: "10px" }}>Logout</Button>
          ) : (
            <Button onClick={signinClick} color='error' variant='contained' sx={{ height: "40px" }}>SignIn</Button>
          )}
        </div>
      </div>
      <div style={{ padding: "20px" }}>
        {movies[3] && (
          <>
            <h1 style={{ color: "#F1F1F1", fontSize: "70px", fontFamily: "initial" }}>{movies[3].original_title}</h1>
            <h5 style={{ color: "#F1F1F1" }}>{movies[3].overview}</h5>
            <Button variant='contained' sx={{ color: 'black', bgcolor: 'white', fontWeight: "bold" }}>View Trailer</Button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
