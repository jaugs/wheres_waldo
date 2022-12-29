import './App.css';
//import {db} from './firebase';
//import {storage} from './firebase';
//import { getDownloadURL, ref } from "firebase/storage";
//import {collection, addDoc, Timestamp} from 'firebase/firestore'
//import {storage} from './firebase';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react'
//import { query, orderBy, onSnapshot} from "firebase/firestore"
import WaldoGame from './components/waldoGame';
import Header from './components/header';
import Homepage from './components/homepage';



function App() {

  const [level, setLevel] = useState({
      level: '',
      url: ''
  })

  const [timer, setTimer] = useState(0)
  const [timerToggle, setTimerToggle] = useState(false)
 // const storage = getStorage()
const levelNames = [{name: 'skiLevel',
                    title: 'Ski Resort'},
                    {name: 'beachLevel',
                    title: 'Beach Party'},
                    {name: 'townLevel',
                    title: 'Town Square'},
                    {name: 'feastLevel',
                    title: 'Gobbling Gluttons'}
                   ] 
  

  //  getDownloadURL(starsRef)
  // .then((url) => {
  //   <img src={url} alt='d'></img>
  // })
  // .catch((error) => {
  //   // A full list of error codes is available at
  //   // https://firebase.google.com/docs/storage/web/handle-errors
  //   switch (error.code) {
  //     case 'storage/object-not-found':
  //       // File doesn't exist
  //       break;
  //     case 'storage/unauthorized':
  //       // User doesn't have permission to access the object
  //       break;
  //     case 'storage/canceled':
  //       // User canceled the upload
  //       break;

  //     // ...

  //     case 'storage/unknown':
  //       // Unknown error occurred, inspect the server response
  //       break;
  //   }
  // });


// useEffect(() => {
//   const taskColRef = query(collection(db, 'tasks'), orderBy('created', 'desc'))
//   onSnapshot(taskColRef, (snapshot) => {
//     setTasks(snapshot.docs.map(doc => ({
//       id: doc.id,
//       data: doc.data()
//     })))
//   })
// },[])



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
            levelNames = {levelNames}
            setLevel = {setLevel}
          />
        }
        />
        <Route
        exact path="/level"
        element = {
          <WaldoGame
            level = {level}
            setLevel = {setLevel}
          />
          }
        />
      </Routes>
    </div>
  </Router>
  );
}
export default App;


      // {tasks.map((task) => (
      //   <Task
      //     id={task.id}
      //     key={task.id}
      //     completed={task.data.completed}
      //     title={task.data.title} 
      //     description={task.data.description}
      //   />
      // ))}
         // {openAddModal &&
      //   <AddTask onClose={() => setOpenAddModal(false)} open={openAddModal}/>
      // }