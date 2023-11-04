import React from 'react'
import Main from './components/Main'
import { Route, Routes} from 'react-router-dom'
import Signin from './components/Signin'
import MovieDetail from './components/MovieDetail';


function App() {
  return (
<div>
   <Routes>
     <Route path="/" element={<Main/>}/>
     <Route path="/signin" element={<Signin/>}/>
     <Route path="/movieDetail" element={<MovieDetail/>} />
   </Routes>
    
</div>

    
  );
}

export default App;
