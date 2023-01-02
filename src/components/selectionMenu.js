//import { clearIndexedDbPersistence } from "firebase/firestore"
import '../styles/selectionMenu.css'


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


function SelectionMenu(props) {

    const divStyle = {
        position: 'absolute',
        top: `${props.menuCoords.y - 150 / 4}px`,
        left: `${props.coords.x > 750 ? props.menuCoords.x -240 / 2 + 3 : props.menuCoords.x + 100 / 2 + 3}px`,
    }

   
    function handleClick(character) {
        console.log(props)
     
        
    
    }
           
      
// x= 962 1024 left right
//y = 587 513 bottom top

    return(
        <div className="selectionMenu" style={divStyle}>
            <ul className='charList'>
                <li onClick={() => handleClick('waldo')}>Waldo</li>
                <li onClick={() => handleClick('odlaw')}>Odlaw</li>
                <li onClick={() => handleClick('wizard')}>Wizard</li>
            </ul>
        </div>
    )
}
export {SelectionMenu}
export {TargetBox}