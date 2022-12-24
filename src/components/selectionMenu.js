//import { clearIndexedDbPersistence } from "firebase/firestore"
import '../styles/selectionMenu.css'

function SelectionMenu(props) {

    const circleStyle = {
        width: '100px',
        height: '100px',
        //position: 'absolute',
        //top: `${props.coords[1]+ 25}px`,
       //left: `${props.coords[0]- 1000}px`,
       
    }
    const divStyle = {
        width: '20%',
        height: '10%',
        position: 'absolute',
        top: `${props.coords[1] + 35}px`,
        left: `${props.coords[0] - 45}px`,
       
    }
    function handleClick(character) {
        //check if guess is correct logic
        alert('guess')
    }


    return(
        <div className="selectionMenu" style={divStyle}>
            <div className='selectionCircle' style={circleStyle}></div>
            <ul className='charList'>
                <li onClick={() => handleClick('waldo')}>Waldo</li>
                <li onClick={() => handleClick('odlaw')}>Odlaw</li>
            </ul>
        </div>
    )
}
export default SelectionMenu