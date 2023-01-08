//import { Outlet } from "react-router-dom"
import { useEffect, useState } from 'react'
import '../styles/leaderboard.css'
//import { Leaderboard } from './leaderboard'
import {db} from '../firebase';
import {  doc, getDoc } from 'firebase/firestore';

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
        <div className='levelBoardContainer'>
        <h4>{level.title} Leaderboard</h4>
        <ul>
            {leaders.map((user, index) => 
            (<li className='userList' key={index}>
                <p>{user.name}</p> 
                <p>{Math.floor(user.time / 60)}:{(user.time % 60) ? (user.time % 60) : '00'}</p> 
            </li>))}
        </ul>
        </div>
    )
}