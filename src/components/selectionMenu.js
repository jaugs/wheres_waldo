//import { clearIndexedDbPersistence } from "firebase/firestore"


function SelectionMenu(props) {

    const divStyle = {
        width: '90px',
        height: '90px',
        border: '2px solid red',
        color: 'blue',
        position: 'absolute',
        top: `${props.coords[1]}px`,
        left: `${props.coords[0]}px`,

    }
    return(
        <div className="selectionMenu"
            style={divStyle}>Waldo</div>
    )
}
export default SelectionMenu