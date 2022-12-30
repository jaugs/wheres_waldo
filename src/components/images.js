

export default function Image (props) {

    function tryMe() {
        console.log(props)
    }
    return (
        <div>
        <button onClick={tryMe}>try</button>
        <img src={props.image} alt={props.name}></img>
     </div>)
}