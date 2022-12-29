import { useEffect, useState } from 'react';
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

  const mouseCoords = {
    x: mouseX,
    y: mouseY,
  };

  setCoords(mouseCoords);
  setMenuCoords(menuCoords);
}



function handleClick(e) {
 
  getCoordinates(e);
   setContextMenu(true)

}

function startGame() {
    console.log('eee')
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
                menuCoords = {menuCoords}
                setMenuCoords = {setMenuCoords}
                coords = {coords}
                setCoords = {setCoords}
            />
            </div>) : (null)}
            <button onClick={startGame} className="startButton">Start!</button>
            <img src={props.level.url} alt="waldoSkiing" id="skiPic" 
                className="waldoPic" onClick={handleClick}></img>


        </div>

    )

}
export default WaldoGame