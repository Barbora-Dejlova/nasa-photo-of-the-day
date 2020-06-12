import React, { useState, useEffect } from "react";
import "./App.css";
import Photo from "./Photo"
import styled from 'styled-components'


export default function App(){
  return(
    <div className="card">
      <p><strong>NASA Pic of the Day</strong></p>
      <Photo />
    </div>
  )
}

const div = styled.div`
background-color: red;
margin: 0 0;
height: 100vh
`