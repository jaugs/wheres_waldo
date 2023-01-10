import { useEffect, useState } from 'react'
import '../styles/leaderboard.css'
import {db} from '../firebase';
import {  doc, getDoc } from 'firebase/firestore';
import Trophy from '../images/firstPlace';
import SecondPlace from '../images/secondPlace';
import ThirdPlace from '../images/thirdPlace';

export default function LevelBoard(props) {  

    const {level} = props
    const [leaders, setLeaders] = useState([])

    useEffect(() => {
        async function getLeaders() {
            let docRef
            if (level.pathname === 'townLevel') {
                docRef = doc(db, 'data', 'town')
            } else if (level.pathname === 'skiLevel') {
                docRef = doc(db, 'data', 'ski')
            } else if (level.pathname === 'feastLevel') {
                docRef = doc(db, 'data', 'feast')
            } else if (level.pathname === 'beachLevel') {
                docRef = doc(db, 'data', 'beach')
            }
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()) {
                let users = docSnap.data().scoreboard
                users.sort((user, nextUser) => user.time - nextUser.time)
                setLeaders(users)
            } else {
                console.log("No such document!");
              }
        }
        getLeaders()
    }, [level])

    return(
        <div className='levelBoardContainer'>{level.title} Leaderboard
            <ul className='leaderList'>
                {leaders.map((user, index) => 
                { if (index + 1 === 1) {
                return (
                    <li key={index} className='first'>
                        <Trophy />
                        <p>{user.name}</p>
                        <p>{Math.floor(user.time / 60)}:{(user.time % 60) ? (user.time % 60) : '00'}</p>
                    </li>)
                } else if (index+1 === 2) { 
                return (
                    <li key={index} className='second'>
                        <SecondPlace />
                        <p>{user.name}</p>
                        <p>{Math.floor(user.time / 60)}:{(user.time % 60) ? (user.time % 60) : '00'}</p>
                    </li>) 
                } else if (index+1 === 3) {
                return (
                    <li key={index} className='third'>
                        <ThirdPlace />
                        <p>{user.name}</p>
                        <p>{Math.floor(user.time / 60)}:{(user.time % 60) ? (user.time % 60) : '00'}</p>
                    </li>) 
                } else if (index === 0 || index === 1 || index === 2) {
                return null
                } else return (
                <li key={index} className='users'>
                    <p className='number'>{index+1}.</p>
                    <p>{user.name}</p>
                   <p>{Math.floor(user.time / 60)}:{(user.time % 60) ? (user.time % 60) : '00'}</p>
                </li>)
                }
                )}
            </ul>
        </div>
    )
}


