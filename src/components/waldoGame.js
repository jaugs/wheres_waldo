import { useEffect, useState } from 'react';
import '../styles/waldoGame.css'
import SelectionMenu from './selectionMenu'
function WaldoGame(props) {

   const [contextMenu, setContextMenu] = useState(false)
   const [coords, setCoords] = useState([])
   // useEffect()



function findPosition(image) {
//     if(typeof( image.offsetParent ) != "undefined")
//   {
    for(var posX = 0, posY = 0; image; image = image.offsetParent)
    {
      posX += image.offsetLeft;
      posY += image.offsetTop;
    }
      //console.log(posX, posY)
      return [ posX, posY ];
    }
    // else {
    //   console.log(image.x, image.y)
    //   return [ image.x, image.y ]; }
//}

function getCoordinates(e) {
    let xPos = 0;
    let yPos = 0;
    let image = document.getElementById('skiPic');
    let imagePos = findPosition(image);
    //if (!e) {e = window.event;}
    if (e.pageX || e.pageY) {
        xPos = e.pageX;
        yPos = e.pageY;
    } else if (e.clientX || e.clientY) {
        xPos = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        yPos = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    xPos = xPos - imagePos[0];
    yPos = yPos - imagePos[1];
    //console.log(xPos);
   // console.log(yPos);
    return [xPos, yPos]
}

function handleMove(e) {
    let clickCoords = getCoordinates(e);
    console.log(clickCoords[0], clickCoords[1])
}

function getGuessCoords() {
   // let element = document.getElementById('guessCircle')
   
    //console.log(guessCoords)
}

function handleClick(e) {
  // console.log(e.target.getBoundingClientRect())
   // console.log(e.nativeEvent);
   let clickCoords = getCoordinates(e);
   console.log(clickCoords)
   
   setCoords(clickCoords)
   setContextMenu(true)
    //let guessCoords = getGuessCoords()

}

function startGame() {
    console.log('eee')
}


    return (
        <div className="gameContainer">efef
           {(contextMenu) ? (<SelectionMenu 
                coords = {coords}
                setCoords = {setCoords}
            />) : (null)}
            <button onClick={startGame} className="startButton">Start!</button>
            <img src={props.level.url} alt="waldoSkiing" id="skiPic" 
                className="waldoPic" onDrag={handleMove} onClick={handleClick}></img>


        </div>

    )

}
export default WaldoGame