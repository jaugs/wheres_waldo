//import { Outlet } from "react-router-dom"
import { useEffect } from 'react'
import '../styles/leaderboard.css'
import { Leaderboard } from './leaderboard'


export default function LevelBoard(props) {


  

    const {level} = props

    // useEffect(() => {
    //     getLeaderboard()

    // })

    // async function getLeaderboard() {
    //     console.log(level)
    //     // const levelRef = doc(db, "data", "beach");


    //     // await updateDoc(newScoreRef, {
    //     //     beachLeaderBoard: arrayUnion({name: 'bob', time: 15})
    //     // })
    // }

    return(
        <div className='levelBoardContainer'>
        <h4>{level.title} Leaderboard</h4>
        <ul>
            {level.scoreboard.map((user, index) => 
            (<li className='userList' key={index}>
                <p>{user.name}</p> 
                <p>{Math.floor(user.time / 60)}:{(user.time % 60) ? (user.time % 60) : '00'}</p> 
            </li>))}
        </ul>
        </div>
    )
}