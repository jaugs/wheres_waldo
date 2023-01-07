//import { Outlet } from "react-router-dom"
import '../styles/leaderboard.css'


export default function LevelBoard(props) {

    const {level} = props

    return(
        <div className='levelBoardContainer'>
        <h4>{level.title} Leaderboard</h4>
        <ul>
            <li></li>
        </ul>
        </div>
    )
}