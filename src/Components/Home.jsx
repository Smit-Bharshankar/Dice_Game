import React , {useState} from 'react'
import styled from 'styled-components';
import dices from '../assets/dices.png'
import PopupModal from './PopupModal'


function Home({toggle }) {


  const handleOnclick = () => {
    toggle();
    setShowPopup(true)
  }

  return (
    <Container>
        <div>
        <img src={dices} alt=""  height='500vh'/>
        </div>
        <div>
        <h1>Dice Game</h1>
    <Button onClick={handleOnclick}>Play Now</Button>
        </div>
    </Container>
  )
}

export default Home

const Container  = styled.div`
max-width: 90vw;
height: 100vh;
display: flex;
justify-content: center; 
align-items: center; 

h1 {
  font-size: 90px;
  white-space: nowrap;
}
`;

const Button = styled.button`
background-color: black;
color: white;
border: none;
border: 2px solid transparent;
border-radius: 5px;
padding: 16px 12px;
min-width: 200px;
font-size: 16px;
transition: 0.3s background ease-in ;
 cursor: pointer;
 margin-top: 12px;

&:hover {
  color: black;
  background-color: #edebeb;
  border: 2px solid black;
  transition: 0.3s background ease-in ;
}

`;
