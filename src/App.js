import './App.css';
import {db} from './firebase';
//import {storage} from './firebase';
//import { getDownloadURL, ref} from "firebase/storage";
//import {collection, addDoc, Timestamp} from 'firebase/firestore'
//import {storage} from './firebase';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react'
//import { query, orderBy, onSnapshot} from "firebase/firestore"
import WaldoGame from './components/waldoGame';
import Header from './components/header';
import Homepage from './components/homepage';
import { collection, getDocs, query } from 'firebase/firestore';
//import { getDatabase, ref, onValue} from "firebase/database";
//import { getDatabase, ref, child, get } from "firebase/database";


function App() {


  const [levels, setLevels] = useState([])
  const [timer, setTimer] = useState(0)
  const [timerToggle, setTimerToggle] = useState(false)
 // const storage = getStorage()

 async function getImage()  {
  const levelList = [];
  const q = query(collection(db, 'data'));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach(doc => {
    const level = doc.data();
    levelList.push(level);
  })
  //console.log(levelList);
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
        {levels.map((level, index) => {
          return (
          <Route
            exact path= {`/${level.pathname}`}
            key = {index}
            element = {
            <WaldoGame
            level = {level}
            />
            }
          />
          )
        })}
      </Routes>
    </div>
  </Router>
  );
}
export default App;