// import logo from './logo.svg';
import { useState, useEffect } from 'react';
// import './App.css';

function DemoApp() {

  const [movies, setMovies] = useState([
    {
      name:''
    }
  ])

  useEffect(()=>{
    fetch('/movies').then(res => {
      if(res.ok){
        return res.json();
      }
    }).then(jsonRes => setMovies(jsonRes))
  }, [])

  return (
    <div className="App">
      {movies.map(movie => {
        return <h1 key={movie.name}>{movie.name}</h1>
      })}
    </div>
  );
}

export default DemoApp;
