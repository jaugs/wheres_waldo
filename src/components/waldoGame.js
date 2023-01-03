import { useState } from 'react';
import '../styles/waldoGame.css'
import {SelectionMenu} from './selectionMenu'
import { TargetBox } from './selectionMenu';

function WaldoGame(props) {

   const [contextMenu, setContextMenu] = useState(false)
   const [coords, setCoords] = useState({
    x: 0,
    y: 0
   })
   const [menuCoords, setMenuCoords] = useState({
    x: 0,
    y: 0
   })
   // useEffect()

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
  console.log(clickCoords)
  setMenuCoords(menuCoords);
  console.log(menuCoords)
}



function handleClick(e) {
 
  getCoordinates(e);
   setContextMenu(true)

}

function startGame() {
    console.log(props.level)
}


    return (
        <div className="gameContainer">edfefeweee
           {(contextMenu) ? (
            <div>
            <TargetBox 
                menuCoords = {menuCoords}
                setMenuCoords = {setMenuCoords}
                coords = {coords}
                setCoords = {setCoords}
            />
            <SelectionMenu 
                level = {props.level}
                setLevels = {props.setLevels}
                menuCoords = {menuCoords}
                setMenuCoords = {setMenuCoords}
                coords = {coords}
                setCoords = {setCoords}
            />
            </div>) : (null)}
            <button onClick={startGame} className="startButton">Start!</button>
            <img src={props.level.url} alt={props.level.title} 
                className="waldoPic" onClick={handleClick}></img>


        </div>

    )

}
export default WaldoGame