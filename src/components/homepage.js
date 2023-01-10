import { Link } from 'react-router-dom'
import '../styles/homepage.css'
import waldo from '../images/waldo.jpg'
import odlaw from '../images/odlaw.jpg'
import wizard from '../images/wizard.jpg'

function Homepage(props) {

    function startTimer() {
        props.setTimer(0)
        props.setTimerToggle(true)
    }

    return (
        <div className="homeContainer">
            <div className="gameTextContainer">
            <div className='directions'>
            <p>Choose your Level and find all characters!</p>
            <p className="red">Complete the game in the fastest time to top the Leaderboard!</p>
            </div>
            <ul className="characterList">Characters to find:
                <li>
                    <img width={'70rem'} className='characterPic' src={waldo} alt='Waldo'></img>
                    <p className='waldo'>Waldo</p>
                </li>
                <li>
                    <img width={'70rem'} height={'150rem'} className='characterPic' src={odlaw} alt='Odlaw'></img>
                    <p>Odlaw</p>
                </li>
                <li>
                    <img width={'70rem'} className='characterPic' src={wizard} alt='Wizard'></img>
                    <p className='wizard'>Wizard</p>
                </li>
            </ul>
            </div>
            <div className="levelContainer">
            {props.levels.map((level) => 
                (<Link className='linkCard' onClick={startTimer} to={level.pathname} key={level.id}>
                    <div className="levelCard">{level.title}
                <img className='homepagePic' key={level.title} src={level.url} alt={level.title}></img>
                </div>
                </Link>
                ))}
               
            </div>
          
        </div>
    )
}
export default Homepage