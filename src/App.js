import React, {useState, useEffect} from "react";
import "./App.css";
import Photo from './Photo.js'
import axios from 'axios'

function App() {
  const[details, setDetails]=useState([])

  useEffect(() => {
    console.log("first render")
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=YYfkkOvLU3VDDJdN1RR50bvqIJiVJOCc0tOgYO5s`)
    .then(response => {
      setDetails(response.data)

    })
    .catch(error =>{
      console.log(error)
    })
    
  },[] )

  return (

    <div className="App">
      {console.log(details)}
      <Photo details  = {details} />
      
    </div>
  );
}

export default App;