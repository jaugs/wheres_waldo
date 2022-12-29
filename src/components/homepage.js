import {storage} from '../firebase';
import { getDownloadURL, ref } from "firebase/storage";
import {useEffect} from 'react'

function Homepage(props) {

    useEffect(() => {
        getImage();
      }, []);

    async function getImage(levelName) {
        // const imgRef = query(collection(storage, 'images'))
        const storageRef = ref(storage);
        //const imagesRef = ref(storageRef, 'images/WWsocialgraphic20.jpg');
        //const fileName = 'skiLevel.jpg';
        const levelRef = ref(storageRef, `images/${levelName}.jpg`);
        let levelUrl = await getDownloadURL(levelRef)
        console.log(levelUrl)
        return levelUrl
        // props.setLevel({
        //  level: 'skiLevel',
        //  url: skiUrl
        // })
       }

    return (
        <div className="homeContainer">
            <div className="gameText">Choose your Level and find all characters!</div>
            <div className="gameText">Complete the game in the fastest time to top the Leaderboard!</div>
            <ul className="characterList">Characters to find:
                <li>Waldo</li>
                <li>Odlaw</li>
                <li>Wizard</li>
            </ul>
            <div className="levelContainer">
                {props.levelNames.map((level) => (<div className="levelCard" id={level.name} key={level.name}>{level.title}
                    <img alt={level.title} src={() => getImage(level.name)}></img>
                    </div>))}
            </div>
        </div>
    )
}
export default Homepage