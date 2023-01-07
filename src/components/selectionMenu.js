import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {db} from '../firebase';
import { collection, getDocs, query, addDoc, setDoc, doc } from 'firebase/firestore';
import '../styles/selectionMenu.css'
//import WaldoGame from './waldoGame'


function TargetBox(props) {

    const circleStyle = {
        width: '100px',
       height: '100px',
       position: 'absolute',
        top: `${props.menuCoords.y - 100 / 2}px`,
       left: `${props.menuCoords.x - 100 / 2}px`,
      
    }
    return (
        <div id='guessCircle' className='selectionCircle' style={circleStyle}></div>
    )
}

function RightGuess(props) {
    const {characters, setCharFound, charFound} = props

    useEffect(() => {
        if (characters === "Waldo") {
          setTimeout(() => {setCharFound(false)}, '4000')
        } else if (characters === "the Wizard") {
            setTimeout(() => {setCharFound(false)}, '4000')
        } else if (characters === "Odlaw") {
            setTimeout(() => {setCharFound(false)}, '4000') }
      }, [characters, setCharFound])
      
const mediaQuery = window.matchMedia('(max-width: 800px)')
const rightGuessStyle = {
    top: `${(document.querySelector('.waldoPic')) ? (document.querySelector('.waldoPic').getBoundingClientRect().top + 20) : 20}px`,
    left: `${(document.querySelector('.waldoPic')) ? (document.querySelector('.waldoPic').getBoundingClientRect().left + 500) : 300}px`
}
const rightGuessStyleMobile = {
    
    top: `${(document.querySelector('.waldoPic')) ? (document.querySelector('.waldoPic').getBoundingClientRect().top + 5) : 220}px`,
    left: `${(document.querySelector('.waldoPic')) ? (document.querySelector('.waldoPic').getBoundingClientRect().left + 50) : 100}px`
}
return (
    <div className='rightGuessContainer'>
    {(charFound) ? 
    (<div style={(mediaQuery.matches) ? 
    (rightGuessStyleMobile) : 
    (rightGuessStyle)} className="rightGuess">Good Work! You Found {characters}!</div>) : 
    null}
    </div>
)
}





function WrongGuess(props) {

    const {guessChar, setGuessChar} = props

    useEffect(() => {
        if (guessChar !== '') {
          setTimeout(() => {setGuessChar('')}, '4000')
        }
      }, [guessChar, setGuessChar])
      
const mediaQuery = window.matchMedia('(max-width: 800px)')
const wrongGuessStyle = {
    top: `${(document.querySelector('.waldoPic')) ? (document.querySelector('.waldoPic').getBoundingClientRect().top + 20) : 20}px`,
    left: `${(document.querySelector('.waldoPic')) ? (document.querySelector('.waldoPic').getBoundingClientRect().left + 500) : 300}px`
}
const wrongGuessStyleMobile = {
    
    top: `${(document.querySelector('.waldoPic')) ? (document.querySelector('.waldoPic').getBoundingClientRect().top + 5) : 220}px`,
    left: `${(document.querySelector('.waldoPic')) ? (document.querySelector('.waldoPic').getBoundingClientRect().left + 50) : 100}px`
}
return (
    <div className='guessContainer'>
    {(guessChar !== '') ? (<div style={(mediaQuery.matches) ? (wrongGuessStyleMobile) : (wrongGuessStyle)} className="wrongGuess">Sorry! No {guessChar} here!</div>) : null}
    </div>
)
}


function ScoreBox(props) {


const {name, setName, timer, setScoreToggle, level} = props
function handleChange(e) {
    setName(e.target.value)
}

async function submitName() {
    
    const newScore =  await addDoc(doc(db, 'leaderboards', 'beachBoard'), {
        name: `${name}`,
        time: `${timer}`
    });


    console.log(newScore)
    setScoreToggle(false)
}

const scoreBoxStyle = {
    position: 'absolute',
    top: `${document.querySelector('.waldoPic').getBoundingClientRect().top + 100}px`,
    left: `${document.querySelector('.waldoPic').getBoundingClientRect().left + 500}px`
}

    return(
        <div style={scoreBoxStyle} className='scoreContainer'>
            <p className='a'>Congratulations! You found all the characters in {props.timer} seconds!</p>
            <p className='b'>Please enter your name:</p>
            <input maxLength={10} className='inputField' onChange={handleChange} type='text'></input>
            <Link to={`/leaderboard/${level.pathname}ScoreBoard`} className='submit' onClick={submitName}>Submit</Link>
        </div>
    )
}



function SelectionMenu(props) {

const {waldoFound, setWaldoFound, wizardFound, setWizardFound, odlawFound, setOdlawFound, guessChar, setGuessChar, setContextMenu, setCharFound, setCharacters} = props


    const divStyle = {
        position: 'absolute',
        top: `${props.menuCoords.y - 150 / 4}px`,
        left: `${props.coords.x > 750 ? props.menuCoords.x -240 / 2 + 3 : props.menuCoords.x + 100 / 2 + 3}px`,
    }

    function handleClick(coordArr, isFound, charString) {
       // console.log(document.querySelector('.waldoPic').getBoundingClientRect())
     if ((Math.abs(props.coords.x - coordArr[0]) < 40) && (Math.abs(props.coords.y - coordArr[1]) < 50) ) 
        {isFound(true)
        setCharFound(true)
        setCharacters(charString)
        setContextMenu(false)

        } else {
        isFound(false)
        setGuessChar(charString)
        console.log(guessChar)
        setContextMenu(false)
        }
        
        }
    
    
           
      
// x= 962 1024 left right
//y = 587 513 bottom top

    return(
        <div className="selectionMenu" style={divStyle}>
            <ul className='charList'>
                {waldoFound ? (<li className='foundChar'>Waldo</li>) : (<li onClick={() => handleClick(props.level.waldo, setWaldoFound, 'Waldo')}>Waldo</li>)}
                {odlawFound ? (<li className='foundChar'>Odlaw</li>) : (<li onClick={() => handleClick(props.level.odlaw, setOdlawFound, 'Odlaw')}>Odlaw</li>)}
                {wizardFound ? (<li className='foundChar'>Wizard</li>) : (<li onClick={() => handleClick(props.level.wizard, setWizardFound, 'the Wizard')}>Wizard</li>)}   
            </ul>
        </div>
    )
}
export {SelectionMenu}
export {TargetBox}
export {RightGuess}
export {WrongGuess}
export {ScoreBox}