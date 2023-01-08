import { Link, Outlet} from "react-router-dom";
import '../styles/leaderboard.css'

function Leaderboard(props) {

    const { levels } = props



    return(
        <div className="leaderBoardContainer">
            <h2>Top Ten Scores</h2>
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
