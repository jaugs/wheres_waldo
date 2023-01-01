import { Link } from 'react-router-dom'
import '../styles/homepage.css'

function Homepage(props) {



    return (
        <div className="homeContainer">
            <div className="gameText">Choose your Level and find all characters!</div>
            <div className="gameText">Complete the game in the fastest time to top the Leaderboard!</div>
            <ul className="characterList">Characters to find:
                <li>Waldo</li>
                <li>Odlaw</li>
                <li>Wizard</li>
            </ul>
            
            <div className="levelContainer">
            {props.levels.map((level) => 
                (<Link to={level.pathname} key={level.id}>
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