import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { Button } from "@mui/material"
import Youtube from "react-youtube"

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function Trailer({location}) {

  const [trailerView, setTrailerView] = useState([])

  const showTrailer = () =>{
    fetch(`https://api.themoviedb.org/3/movie/${location.state.movie.id}/videos?api_key=49311acf60784708804ea40ff2c355c0&language=en-US`)
    .then(res => res.json())
    .then(json => setTrailerView(json.results))
    .catch(error => {
      console.error("Error fetching trailer data:", error);
      setTrailerView([]); // Set an empty array if there's an error
    });
  }

  useEffect(()=>{
    showTrailer();
    //react-hooks/exhaustive-deps
  },[]);

        let subtitle;
        const [modalIsOpen, setIsOpen] = React.useState(false);
      
        function openModal() {
          setIsOpen(true);
        }
      
        function afterOpenModal() {
          // references are now sync'd and can be accessed.
          subtitle.style.color = '#f00';
        }
      
        function closeModal() {
          setIsOpen(false);
        }

        

    return (
        <div>
          <Button variant='contained' sx={{color:"black", bgcolor: "white"}} onClick={openModal}>Play Trailer</Button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
            
          {trailerView.length > 0 ? (
            <Youtube videoId={trailerView[0].key} />
          ) : (
            <p>No trailer available</p>
          )} 
          </Modal>
        </div>
      );
}

export default Trailer

