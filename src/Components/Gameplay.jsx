import React, { useState } from 'react'
import styled from 'styled-components';
import RollDice from './RollDice';

const Gameplay = ({toggle}) => {

  const [numSelected , setNumSelected] = useState(null);
  const [ currentDice , setCurrentDice ] = useState(4);
  const [ Score , setScore ] = useState(0);
  const [Error , setError] = useState(null);


  const dive = [ 1,2,3,4,5,6];


  const handleBoxClick = (value) => {
    setNumSelected(value);
  };

  return (
    <>
    {/* HOME Button */}
    <Button onClick={toggle}>Main Menu</Button>

    <Topdisplay>
    <Scorecomp>
      <h1>{Score}</h1>
      <h2>Score</h2>
    </Scorecomp>
    <NumSelecter>

    <BoxDisplay >
    {
      dive.map((value , index) => (<Box isSelected={value === numSelected} key={index} onClick={() => handleBoxClick(value)}>{value}</Box>))
    }
    </BoxDisplay>
    <p>Select Number</p>
    </NumSelecter>
    </Topdisplay>

       <RollDice 
       currentDice={currentDice}
       setCurrentDice={setCurrentDice}
       numSelected={numSelected}
       setNumSelected={setNumSelected}
       Score={Score}
       setScore={setScore}
       Error={Error}
       setError={setError}
       
       />
       
    </>
  )
}

export default Gameplay

const NumSelecter = styled.div`
p{
  font-size:24px;
  font-weight:bold;
  margin-top:8px;
}
`



const Topdisplay = styled.div`
display: flex;
justify-content: space-around;
align-items:center;
`

const BoxDisplay = styled.div`
display: flex;
`

const Box = styled.div`
height:72px;
width:72px;
border: 1px solid black;
display: grid;
place-items: center;
font-size:24px;
font-weight: 700;
margin-left: 4px;
border-radius: 4px;

background-color: ${({ isSelected }) => (isSelected ? '#0a9bf0' : 'white')}; // Change background color based on isSelected prop
color: ${({ isSelected }) => (isSelected ? 'white' : 'black')}; // Change text color based on isSelected prop
`

const Button = styled.button`
background-color: black;
color: white;
border: none;
border: 2px solid transparent;
border-radius: 5px;
padding: 16px 12px;
min-width: 160px;
font-size: 16px;
transition: 0.3s background ease-in ;
 cursor: pointer;
 margin-top: 12px;

 margin-left:26px;

&:hover {
  color: black;
  background-color: #edebeb;
  border: 2px solid black;
  transition: 0.3s background ease-in ;
}


`

const Scorecomp = styled.div `


h1{
  font-size:80px;
}
h2{
  font-size:26px;
}
`;