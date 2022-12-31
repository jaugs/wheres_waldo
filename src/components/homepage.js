import {storage} from '../firebase';
import { getDownloadURL, ref } from "firebase/storage";
import {useEffect} from 'react'
import '../styles/homepage.css'
import Image from './images';

function Homepage(props) {

// useEffect(() => {
//    setLevelNames(levelNames)
   
// },[levelNames, setLevelNames])
    

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
                (<div className="levelCard" id={level.name} key={level.id}>{level.title}
                <img className='homepagePic' key={level.title} src={level.url} alt='eee'></img>
                </div>
                ))}
               
            </div>
        </div>
    )
}
export default Homepage