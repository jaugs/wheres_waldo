import { Link } from "react-router-dom";
import '../styles/header.css'

function Header(props) {

    function stopTimer() {
       
            props.setTimer(0)
            props.setTimerToggle(false)
        
        
    }


    return (
        <div className='header'>
            <Link 
                onClick={stopTimer}
                to="/"
                className='linkButton'> Home
            </Link>
            <div className="titleText">
                <h2>Wheres Waldo:</h2>
                <h2 className="redText">A Photo Tagging App</h2>
            </div>
            {props.timerToggle ? 
            (<div className="timerBox">{props.timer}</div>) : null}
            <Link
                onClick={stopTimer}
                to="/leaderboard"
                className='linkButton'>Leaderboard
            </Link>
        </div>
        
    )
}
export default Header