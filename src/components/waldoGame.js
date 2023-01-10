import { useState, useEffect } from 'react';
import '../styles/waldoGame.css'
import { TargetBox, WrongGuess, RightGuess, SelectionMenu, ScoreBox } from './selectionMenu';

function WaldoGame(props) {

  const {name, setName, timer, setTimer, timerToggle, setTimerToggle, level} = props
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

  useEffect(() => {
    if (timerToggle) {
      setTimeout(() => {setTimer(timer + 1)}, '1000')
  }}, [timer, timerToggle, setTimer]);

  useEffect(() => {
    if (waldoFound && wizardFound && odlawFound) {
      gameOver()
    }})

  function gameOver() {
    setWizardFound(false)
    setWaldoFound(false)
    setOdlawFound(false)
    setCharacters('')
    setCharFound(false)
    setTimerToggle(false);
    setContextMenu(false)
    setScoreToggle(true)
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
    setMenuCoords(menuCoords);
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
        />
        <SelectionMenu 
                level = {level}
                menuCoords = {menuCoords}
                coords = {coords}
                waldoFound = {waldoFound}
                setWaldoFound = {setWaldoFound}
                wizardFound = {wizardFound}
                setWizardFound = {setWizardFound}
                odlawFound = {odlawFound}
                setOdlawFound = {setOdlawFound}
                guessChar = {guessChar}
                setGuessChar = {setGuessChar}
                setContextMenu = {setContextMenu}
                setCharFound = {setCharFound}
                setCharacters = {setCharacters}
          />
      </div>) : (null)}
      <img 
        src={props.level.url} 
        alt={props.level.title} 
        className="waldoPic" 
        onClick={handleClick}>
      </img>
      <WrongGuess
        guessChar = {guessChar}
        setGuessChar = {setGuessChar}
      />
      <RightGuess
        characters = {characters}
        charFound = {charFound}
        setCharFound = {setCharFound}
      />
      {scoreToggle ? 
        <ScoreBox 
          name = {name}
          setName = {setName} 
          timer = {timer} 
          setScoreToggle = {setScoreToggle}
          level = {level}
        /> : null}
    </div>
  )
}
export default WaldoGame