import React, {useState, useEffect} from 'react';
import "./App.css";
import axios from 'axios';
import { Card, CardTitle, CardText, CardImg, CardBody, Button } from 'reactstrap';
import styled from 'styled-components'


export default function Photo(props){

    const [picture, setPic] = useState([]);
    const [date, setDate] = useState("");

    useEffect(() => {

        axios

        .get(`https://api.nasa.gov/planetary/apod?api_key=YYfkkOvLU3VDDJdN1RR50bvqIJiVJOCc0tOgYO5s&date=${date}`)

        .then(response => {

            console.log(response);

            setPic(response.data);

            setDate(response.data.date);
    
        })
        .catch(error => {

            console.log("Error: ", error);

        })

    });

    return (
        <Div className="photoContainer">
            <Card>
                <StyledImg width="100%" src={picture.url} alt="NASA Pic of the Day" />
                <CardBody>
                    <CardTitle className="card">{picture.title}</CardTitle>
                    <CardText className="card">{picture.explanation}</CardText>
                    <CardText className="card">{picture.date}</CardText>
                    <Button className="butt" href="https://apod.nasa.gov/apod/astropix.html">Original Post</Button>
                </CardBody>
            </Card>
            
        </Div>
    )
}



const CardText = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: calc(50% - 20px);
margin: 10px;
border: 2px dashed white;
border-radius: 6px;
`
const StyledImg = styled.img`
display: block;
object-fit: contain;
width: 100%;
height: 100%;
padding: 10px 10px 0px 10px

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;