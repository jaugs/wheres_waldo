import { useState } from "react"
import {db} from '../firebase';
import { collection, getDocs, query, addDoc, setDoc, doc } from 'firebase/firestore';

function Leaderboard(props) {

const [beachLeaders, setBeachLeaders] = useState([])
    


async function selectLevel(level) {
  const doceee =   await setDoc(doc(db, 'leaderboards', 'beachBoard'), {
        name: 'losamn',
        state:  'ddddddddd'
    });
    console.log(doceee)


    try {
        const docRef = await addDoc(collection(db, 'leaderboards', 'beachBoard'), {
            first: 'ada',
            last: 'ddd'
        });
        console.log('document', docRef.id)
    } catch(e) {
        console.error('error adding:', e)
    }
    //console.log(level)
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