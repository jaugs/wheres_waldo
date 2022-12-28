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

      const waldoCoordsX = []
      const waldoCoordsY = []
        for (let i = 962; i < 1025; i++) {
            waldoCoordsX.push(i)
        }
        for (let k = 513; k < 588; k++) {
            waldoCoordsY.push(k)
        }
        //check if guess is correct logic
        //alert('guess')
        let element = document.getElementById('guessCircle')
        let guessCoords = element.getBoundingClientRect()
            console.log(guessCoords)
        let guessRangeY = []
        let guessRangeX = []
        for (let i = guessCoords.y; i < guessCoords.bottom; i++) {
            guessRangeY.push(i -50)
        }
        for (let i = guessCoords.x; i < guessCoords.right; i++) {
            guessRangeX.push(i)
        }
       // console.log(guessRangeX)
       // console.log(guessRangeY)

        const yMatch = waldoCoordsY.filter(element => guessRangeY.includes(element));
        const xMatch = waldoCoordsX.filter(element => guessRangeX.includes(element));
        console.log(xMatch.length, yMatch.length)
        console.log(xMatch, yMatch)
        // if (parseInt(xMatch.lengh) !== 0) {
        //     console.log(xMatch.length)s
        //     if (yMatch.length !== 0) {
        //          alert('eeeee') }
        // }
        if (xMatch && xMatch.length) {
            if (yMatch && yMatch.length) {
                prompt('eeeee')
            }
        }
    
    
    }
           
       // console.log(yMatch, xMatch)
    
// x= 962 1024 left right
//y = 587 513 bottom top

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