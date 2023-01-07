import { useState } from "react"
import {db} from '../firebase';
import { collection, updateDoc, arrayUnion, getDocs, query, addDoc, setDoc, doc } from 'firebase/firestore';
import { Link, Outlet} from "react-router-dom";
import '../styles/leaderboard.css'

function Leaderboard(props) {

    const {name, levels } = props
const [beachLeaders, setBeachLeaders] = useState([])
    


async function selectLevel(level) {

    const nameRef = collection(db, 'towns')

    const newScoreRef = doc(db, "data", "beach");


await updateDoc(newScoreRef, {
    beachLeaderBoard: arrayUnion({name: 'bob', time: 15})
});



//   const doceee =   await setDoc(doc(db, 'data', 'beach', 'beachLeaderBoard'), {
//         name: 'cc',
//         state:  'dd'
//     });
//     console.log(doceee)

//     const scoreRef = collection(db, 'leaderboards', 'scorebare', 'beach')
//     try {
//         const docRef = await addDoc(collection(db, 'leaderboards', 'scorebard', 'beach'), {
//             first: 'vv',
//             last: 'vv'
//         });
//         console.log(docRef)
//     } catch(e) {
//         console.error('error adding:', e)
//     }
}

    return(
        <div className="leaderBoardContainer">
            <h2>Top Ten Scores</h2>
            <button onClick={selectLevel}>try</button>
            <h3>Select a Level to view:</h3>
            <div className="levelSelect">
                {levels.map((level, index) => {
                return (
                  <Link className="levelLink" key={`${index}b`} to={`${level.pathname}ScoreBoard`}>{level.title}</Link>)})}   
            </div>
        <Outlet />
        </div>
    )
}





export {Leaderboard}
