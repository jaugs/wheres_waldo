import './App.css';
import {db} from './firebase';
//import {storage} from './firebase';
//import { getDownloadURL, ref} from "firebase/storage";
//import {collection, addDoc, Timestamp} from 'firebase/firestore'
//import {storage} from './firebase';
import { HashRouter as Router, Routes, Route} from "react-router-dom";
import {useState, useEffect} from 'react'
//import { query, orderBy, onSnapshot} from "firebase/firestore"
import WaldoGame from './components/waldoGame';
import Header from './components/header';
import Homepage from './components/homepage';
import {Leaderboard} from './components/leaderboard';
import LevelBoard from './components/levelboard';
import { collection, getDocs, query } from 'firebase/firestore';
//import { getDatabase, ref, onValue} from "firebase/database";
//import { getDatabase, ref, child, get } from "firebase/database";


function App() {


  const [levels, setLevels] = useState([])
  const [timer, setTimer] = useState(0)
  const [timerToggle, setTimerToggle] = useState(false)
  const [name, setName] = useState('')


 async function getImage()  {
  const levelList = [];
  const q = query(collection(db, 'data'));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach(doc => {
    const level = doc.data();
    levelList.push(level);
  })
  setLevels(levelList)
}
 
useEffect(() => {
  getImage()
}, [])



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
            setTimer = {setTimer}
            setTimerToggle = {setTimerToggle}
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
            timer = {timer}
            setTimer = {setTimer}
            setTimerToggle = {setTimerToggle}
            timerToggle = {timerToggle}
            name = {name}
            setName = {setName}

            />
            }
          />
          )
        })}
       

        <Route path="leaderboard" element={<Leaderboard levels = {levels}/>}>
          {levels.map((level, index) => {
            return (
              <Route exact path={`${level.pathname}ScoreBoard`} key={`${index}dd`}
              element={<LevelBoard level = {level}/>}
              />
           
  
                         )
                         })}
         

        </Route>

      </Routes>
      <div className='footer'>By JAUGS 2023</div>
    </div>
  </Router>
  );
}
export default App;