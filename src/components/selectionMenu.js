//import { clearIndexedDbPersistence } from "firebase/firestore"
//import { useEffect } from 'react'
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


function SelectionMenu(props) {

const {waldoFound, setWaldoFound, wizardFound, setWizardFound, odlawFound, setOdlawFound, guessChar, setGuessChar, setContextMenu} = props


    const divStyle = {
        position: 'absolute',
        top: `${props.menuCoords.y - 150 / 4}px`,
        left: `${props.coords.x > 750 ? props.menuCoords.x -240 / 2 + 3 : props.menuCoords.x + 100 / 2 + 3}px`,
    }

   
    function handleClick(coordArr, isFound, charString) {
        console.log(document.querySelector('.waldoPic').getBoundingClientRect())
     if ((Math.abs(props.coords.x - coordArr[0]) < 40) && (Math.abs(props.coords.y - coordArr[1]) < 50) ) 
        {isFound(true)
        console.log('found')
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
                {wizardFound ? (<li className='foundChar'>Wizard</li>) : (<li onClick={() => handleClick(props.level.wizard, setWizardFound, 'Wizard')}>Wizard</li>)}   
            </ul>
        </div>
    )
}
export {SelectionMenu}
export {TargetBox}