import './App.css';
import {db} from './firebase';
import {storage} from './firebase';
import { getDownloadURL, ref} from "firebase/storage";
//import {collection, addDoc, Timestamp} from 'firebase/firestore'
//import {storage} from './firebase';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import {useState, useEffect, useCallback} from 'react'
//import { query, orderBy, onSnapshot} from "firebase/firestore"
import WaldoGame from './components/waldoGame';
import Header from './components/header';
import Homepage from './components/homepage';
import { collection, getDocs, query } from 'firebase/firestore';
//import { getDatabase, ref, onValue} from "firebase/database";
//import { getDatabase, ref, child, get } from "firebase/database";
import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';


function App() {

  const [level, setLevel] = useState({
      level: '',
      url: ''
  })

  const [levels, setLevels] = useState([])
  const [timer, setTimer] = useState(0)
  const [timerToggle, setTimerToggle] = useState(false)
 // const storage = getStorage()


//  const [levelNames, setLevelNames] = useState([
//   {name: 'skiLevel',
//    title: 'Ski Resort',
//    url: ''
//   },
//   {name: 'beachLevel',
//   title: 'Beach Party',
//   url: ''
//   },
//   {name: 'townLevel',
//   title: 'Town Square',
//   url: ''
//   },
//   {name: 'feastLevel',
//   title: 'Gobbling Gluttons',
//   url: ''
//   }
// ]) 

//const [newImage, setnewImage] = useState('')

 async function getImage()  {
  const levelList = [];
  const q = query(collection(db, 'data'));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach(doc => {
    const level = doc.data();
    levelList.push(level);
  })
  console.log(levelList);
  setLevels(levelList)
}
 



useEffect(() => {
  getImage()
}, [])


useEffect(() => {
  if (timerToggle) {
    setTimeout(() => {setTimer(timer + 1)}, '1000')
  }

}, [timer, timerToggle]);



  return (

 <Router basename="/">
    <div className="App">
      <Header 
        timer = {timer}
        setTimer = {setTimer}
        timerToggle = {timerToggle}
        setTimerToggle = {setTimerToggle}
      />
      <Routes> 
        <Route 
        exact path="/"
        element= {
          <Homepage
            levels = {levels}
            setLevels = {setLevels}
          />
        }
        />
        <Route
        exact path="/level"
        element = {
          <WaldoGame
            level = {levels}
            setLevel = {setLevels}
          />
          }
        />
      </Routes>
    </div>
  </Router>
  );
}
export default App;