import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {db} from '../firebase';
import { updateDoc, arrayUnion, doc } from 'firebase/firestore';
import '../styles/selectionMenu.css'

function TargetBox(props) {

    const mediaQuery = window.matchMedia('(max-width: 800px)')

    const circleStyleMobile = {
        width: '50px',
       height: '50px',
       position: 'absolute',
        top: `${props.menuCoords.y - 50 / 2}px`,
       left: `${props.menuCoords.x - 50 / 2}px`,
    }

    const circleStyle = {
         width: '100px',
        height: '100px',
       position: 'absolute',
        top: `${props.menuCoords.y - 100 / 2}px`,
       left: `${props.menuCoords.x - 100 / 2}px`,
    }

    return (
        <div id='guessCircle' className='selectionCircle' style= {mediaQuery.matches ?
            circleStyleMobile : circleStyle}></div>
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
      
return (
    <div className='rightGuessContainer'>
        {(charFound) ? 
            (<div className="rightGuess">Good Work! You Found {characters}!</div>) : 
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
      
return (
    <div className='guessContainer'>
        {(guessChar !== '') ? 
            (<div className="wrongGuess">Sorry! No {guessChar === 'the Wizard' ? ('Wizard') :
                guessChar} here!</div>) : 
                null}
    </div>
)
}

function ScoreBox(props) {

    const {name, setName, timer, setScoreToggle, level} = props

    function handleChange(e) {
        setName(e.target.value)
    }

    async function submitName() {
        if (level.pathname === 'townLevel') {
            await updateDoc(doc(db, 'data', 'town'), {
            scoreboard: arrayUnion({name: name, time: timer})
        });
        } else if (level.pathname === 'skiLevel') {
            await updateDoc(doc(db, 'data', 'ski'), {
            scoreboard: arrayUnion({name: name, time: timer})
        });
        } else if (level.pathname === 'feastLevel') {
            await updateDoc(doc(db, 'data', 'feast'), {
            scoreboard: arrayUnion({name: name, time: timer})
        });
        } else if (level.pathname === 'beachLevel') {
            await updateDoc(doc(db, 'data', 'beach'), {
            scoreboard: arrayUnion({name: name, time: timer})
        });
        }
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

    const {waldoFound, setWaldoFound, wizardFound, setWizardFound, odlawFound, setOdlawFound, setGuessChar, setContextMenu, setCharFound, setCharacters} = props
    const mediaQuery = window.matchMedia('(max-width: 800px)')

    const divStyle = {
        position: 'absolute',
        top: `${props.menuCoords.y - 150 / 4}px`,
        left: `${props.coords.x > 750 ? props.menuCoords.x -240 / 2 + 3 : props.menuCoords.x + 100 / 2 + 3}px`,
    }

    const divStyleMobile = {
        position: 'absolute',
        top: `${props.menuCoords.y - 120 / 4}px`,
        left: `${props.coords.x > 750 ? props.menuCoords.x - 180 / 2 + 3 : props.menuCoords.x + 60 / 2 + 3}px`,
    }

    function handleClick(coordArr, isFound, charString) {
        if ((Math.abs(props.coords.x - coordArr[0]) < 40) && (Math.abs(props.coords.y - coordArr[1]) < 50) ) {
            isFound(true)
            setCharFound(true)
            setCharacters(charString)
            setContextMenu(false)
        } else {
            isFound(false)
            setGuessChar(charString)
            setContextMenu(false)
        }
    }
 
    return(
        <div className="selectionMenu" style={mediaQuery.matches ?
            divStyleMobile : divStyle}>
            <ul className='charList'>
                {waldoFound ? 
                    (<li className='foundChar'>Waldo</li>) : 
                    (<li onClick={() => handleClick(props.level.waldo, setWaldoFound, 'Waldo')}>Waldo</li>)}
                {odlawFound ? 
                    (<li className='foundChar'>Odlaw</li>) : 
                    (<li onClick={() => handleClick(props.level.odlaw, setOdlawFound, 'Odlaw')}>Odlaw</li>)}
                {wizardFound ? 
                    (<li className='foundChar'>Wizard</li>) : 
                    (<li onClick={() => handleClick(props.level.wizard, setWizardFound, 'the Wizard')}>Wizard</li>)}   
            </ul>
        </div>
    )
}
export {SelectionMenu}
export {TargetBox}
export {RightGuess}
export {WrongGuess}
export {ScoreBox}