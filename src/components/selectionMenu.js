//import { clearIndexedDbPersistence } from "firebase/firestore"
import '../styles/selectionMenu.css'

function SelectionMenu(props) {

    const circleStyle = {
        width: '100px',
       height: '100px',
       // position: 'absolute',
        top: `${props.coords[1]+ 25}px`,
       left: `${props.coords[0]- 1000}px`,
    //    position: 'absolute',
      
       
    }
    const divStyle = {
        width: '20%',
        height: '10%',
        position: 'absolute',
        // top: `${props.coords[1]}px`,
        // left: `${props.coords[0]}px`,
        top: `${props.coords[1] + 35}px`,
        left: `${props.coords[0] - 45}px`,
    }

    // const guessStyle = {
       
    //     width: '20%',
    //     height: '20%',
    //     position: 'absolute',
    //     top: `${props.coords[1]}px`,
    //     left: `${props.coords[0]}px`,
    // }

    function handleClick(character) {
        //check if guess is correct logic
        //alert('guess')
        let element = document.getElementById('guessCircle')
        let guessCoords = element.getBoundingClientRect()1 
            console.log(guessCoords.x)
    }
//  y = 358 - 300 
//  x = 557 - 591

    return(
        <div className="selectionMenu" style={divStyle}>
            
            <div id='guessCircle' className='selectionCircle' style={circleStyle}></div>
            <ul className='charList'>
                <li onClick={() => handleClick('waldo')}>Waldo</li>
                <li onClick={() => handleClick('odlaw')}>Odlaw</li>
            </ul>
        </div>
    )
}
export default SelectionMenu