import { useState } from "react"
import {db} from '../firebase';
import { collection, getDocs, query } from 'firebase/firestore';

function Leaderboard(props) {

const [beachLeaders, setBeachLeaders] = useState([])



function selectLevel(level) {
    console.log(level)
}

    return(
        <div className="leaderBoardContainer">dddd
            <h2>Top Ten Scores </h2>
            <h3>Select a Level to view:</h3>
            <div className="levelSelect">
                <p onClick={() => selectLevel('beach')}>Beach Party</p>
                <p>Gobbling Glutons</p>
                <p>Ski Mountain</p>
                <p>Town Square</p>
            </div>
            <div className="leaderBoard">
                
            </div>

        </div>
    )
}
export default Leaderboard