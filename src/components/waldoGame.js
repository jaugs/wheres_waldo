

function WaldoGame(props) {

function startGame() {
    console.log('eee')
}


    return (
        <div className="gameContainer">efef
            <button onClick={startGame} className="startButton">Start!</button>
            <img src={props.level.url} alt="waldoSkiing" className="skiPic"></img>


        </div>

    )

}
export default WaldoGame