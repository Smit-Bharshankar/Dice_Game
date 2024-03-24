import React from 'react'
import styled from 'styled-components';


const PopupModal = ({gotbtn , showPopup}) => {


  return (  
    <>
    {
        showPopup && (

        
     

<Popup>
      <Popinner>
        <h2 style={{fontSize:'30px'}}>Welcome to the Dice Game!</h2>
        <h3 style={{marginTop:'15px' }}>Rules:</h3>
        <ContentWrapper>
        <ol>
          <li><strong>Objective:</strong> Your goal is to predict the outcome of rolling a dice.</li>
          <li><strong>How to Play:</strong>
            <ul>
              <li>Choose a number between 1 and 6.</li>
              <li>Click on the dice image to roll the dice.</li>
            </ul>
          </li>
          <li><strong>Scoring:</strong>
            <ul>
              <li>If the dice value matches your chosen number, you'll be awarded 2 points.</li>
              <li>If the dice value does not match your chosen number, 1 point will be deducted from your score.</li>
            </ul>
          </li>
          <li><strong>Winning:</strong> 
            <ul>
              <li>Keep playing and try to score as high as possible!</li>
              <li>The game will continue until you decide to stop.</li>
            </ul>
          </li>
          <li><strong>Note:</strong> Remember to choose your number wisely, and may the odds be in your favor!</li>
        </ol>
        </ContentWrapper>
        <CloseButton onClick={gotbtn} >Got It</CloseButton>
      </Popinner>
    </Popup>

  )}


</>
  )
}

export default PopupModal;


const Popup = styled.div`

height:100%;
width:100%;


display:flex;
flex-direction:column;

position: fixed;
inset:0;
background-color: rgba(0, 0, 0, 0.3); /* 30% opacity black background */
backdrop-filter: blur(4px); /* Apply a 4px blur effect to the background */

`

const CloseButton = styled.button`

  border-radius: 4px;
  color: #9021ff;
  font-size:18px;
  background-color: #04acb5;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-top: 15px;
`

const Popinner = styled.div`
border-radius:6px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  background-color: rgba(255, 255, 255, 0.5);
  color: black;
  font-size:22px;
  
  height: 75%;
  width: 60%;

  ol {
    margin:0;
    padding:0;
  }

  li {
    font-family:Arial;
  }

  ol li {
    margin-top:10px;
  }
`;

const ContentWrapper = styled.div`
  width: 70%; /* Adjust the width of the content */
`