import React, { useState , useEffect} from 'react'
import dice1 from '../assets/Dice1-6/dice_1.png'
import dice2 from '../assets/Dice1-6/dice_2.png'
import dice3 from '../assets/Dice1-6/dice_3.png'
import dice4 from '../assets/Dice1-6/dice_4.png'
import dice5 from '../assets/Dice1-6/dice_5.png'
import dice6 from '../assets/Dice1-6/dice_6.png'
import styled from 'styled-components'


const RollDice = ({currentDice , setCurrentDice , numSelected , setNumSelected , Score ,setScore , Error , setError}) => {


    const generateRandom = (min , max ) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const DiceRoll = () => {
      if (!numSelected) {
        setError("select a number first")
        return
      }
        const dicerolloutput = generateRandom(0,6);
        setCurrentDice((prev) => dicerolloutput);
    }

    useEffect(() => {
      checkMatch();
    }, [currentDice, numSelected]); // Run checkMatch whenever currentDice or numSelected changes
  
    const checkMatch = () => {
      if (currentDice === (numSelected - 1 )) {
        setScore((prev) => prev + 2);
      } else if (Score > 0) {
        setScore((prev) => prev - 1);
      }

      setError("")
    };

    const imgarr = [dice1, dice2, dice3, dice4, dice5, dice6];
  return (
    <MainContainer>
    <div className='Dicecontainer' onClick={DiceRoll}>
      <img src={imgarr[currentDice]} alt="dice rolling" />
    </div>
    <p>
        Click on Dice to Roll
    </p>
      <p style={{color:'red'}}>{Error}</p>
    </MainContainer>
  )
}

export default RollDice


const MainContainer = styled.main`
margin-top:50px;
display: flex;
flex-direction: column;
align-items: center;

p{
    font-size:24px;
    font-weight:bold;
}

`