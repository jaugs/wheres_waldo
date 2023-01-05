import { useState, useEffect } from 'react';
import '../styles/waldoGame.css'
import {RightGuess, SelectionMenu} from './selectionMenu'
import { TargetBox } from './selectionMenu';
import { WrongGuess } from './selectionMenu';
import { ScoreBox } from './selectionMenu';
function WaldoGame(props) {


  const {name, setName, timer, setTimer, timerToggle, setTimerToggle, level, setLevels} = props
  const [waldoFound, setWaldoFound] = useState(false)
  const [wizardFound, setWizardFound] = useState(false)
  const [odlawFound, setOdlawFound] = useState(false)
  const [guessChar, setGuessChar] = useState('')
  const [scoreToggle, setScoreToggle] = useState(false)
  const [charFound, setCharFound] = useState(false)
  const [characters, setCharacters] = useState('')

   const [contextMenu, setContextMenu] = useState(false)
   const [coords, setCoords] = useState({
    x: 0,
    y: 0
   })
   const [menuCoords, setMenuCoords] = useState({
    x: 0,
    y: 0
   })



//feast
//Waldo: x: 565  + 20 y: 365 +40
//Wizard: x: 850 y: 863
//Odlaw: x: 400 y:610

//beach
//Waldo: x: 615 y: 380
//Wizard: x: 270 y: 365
//Odlaw: x: 104 y:360

//ski
//Waldo: x: 850 y: 740
//Wizard: x: 69 y: 750
//Odlaw: x: 315 y:640

//town
//Waldo: x: 425 y: 760
//Wizard: x: 655 y: 780
//Odlaw: x: 585 y:920


useEffect(() => {
  if (timerToggle) {
    setTimeout(() => {setTimer(timer + 1)}, '1000')
  }

}, [timer, timerToggle, setTimer]);

useEffect(() => {
  if (!timerToggle) {
    setTimerToggle(true)
  }
})


useEffect(() => {
    if (waldoFound && wizardFound && odlawFound) {
      gameOver()
    }
})

function gameOver() {
  //setScore(timer)
  setWizardFound(false)
  setWaldoFound(false)
  setOdlawFound(false)
  setCharacters('')
  setCharFound(false)
  setTimerToggle(false);
  setContextMenu(false)
  setScoreToggle(true)
  console.log('over')

}

function getCoordinates(e) {
  const { width, height } =  e.target.getBoundingClientRect();
  const { offsetX, offsetY } = e.nativeEvent;

  const mouseX = Math.round((offsetX / width) * 1000);
  const mouseY = Math.round((offsetY / height) * 1000);
  const { pageX: menuX, pageY: menuY } = e;
  const menuCoords = {
    x: menuX,
    y: menuY,
  };

  const clickCoords = {
    x: mouseX,
    y: mouseY,
  };

  setCoords(clickCoords);
  //console.log(clickCoords)
  setMenuCoords(menuCoords);
 // console.log(menuCoords)
}



function handleClick(e) {
  getCoordinates(e);
   setContextMenu(true)

}

    return (
        <div className="gameContainer">
           {(contextMenu) ? (
            <div>
            <TargetBox 
                menuCoords = {menuCoords}
                setMenuCoords = {setMenuCoords}
                coords = {coords}
                setCoords = {setCoords}
            />
            <SelectionMenu 
                level = {level}
                setLevels = {setLevels}
                menuCoords = {menuCoords}
                setMenuCoords = {setMenuCoords}
                coords = {coords}
                setCoords = {setCoords}
                waldoFound = {waldoFound}
                setWaldoFound = {setWaldoFound}
                wizardFound = {wizardFound}
                setWizardFound = {setWizardFound}
                odlawFound = {odlawFound}
                setOdlawFound = {setOdlawFound}
                guessChar = {guessChar}
                setGuessChar = {setGuessChar}
                contextMenu = {contextMenu}
                setContextMenu = {setContextMenu}
                setCharFound = {setCharFound}
                characters = {characters}
                setCharacters = {setCharacters}
            
            />
            </div>) : (null)}
            
            <img src={props.level.url} alt={props.level.title} 
                className="waldoPic" onClick={handleClick}></img>
            <WrongGuess
              guessChar = {guessChar}
              setGuessChar = {setGuessChar}
            />
            <RightGuess
              characters = {characters}
              setCharacters = {setCharacters}
              charFound = {charFound}
              setCharFound = {setCharFound}
            />
            {scoreToggle ? 
              <ScoreBox 
                setName = {setName} 
                timer = {timer} 
                scoreToggle={scoreToggle} 
                setScoreToggle = {setScoreToggle}
                level = {level}
                /> : null}
        </div>

    )

}
export default WaldoGame