import { Link } from "react-router-dom";
import '../styles/header.css'

function Header(props) {

function timerOn() {
    if (!props.timerToggle){
    props.setTimerToggle(true)
    } else props.setTimerToggle(false)
}

    return (
        <div className='header'>
        <h2>Photo Tag App</h2>
        <h2>Wheres Waldo</h2>
        <Link 
          to="/level"
          className='linkButton'>Level Select
          </Link>
          <Link 
          to="/"
          className='linkButton'> Home
          </Link>
          <div className="timerBox">{props.timer}</div>

          <button onClick={timerOn}>Timer</button>
          </div>
        
    )
}
export default Header