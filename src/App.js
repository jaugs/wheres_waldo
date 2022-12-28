//import logo from './logo.svg';
import './App.css';
//import {db} from './firebase';
//import {storage} from './firebase';
import { getDownloadURL, ref } from "firebase/storage";
//import {collection, addDoc, Timestamp} from 'firebase/firestore'
//import AddTask from './components/addTask'
import {storage} from './firebase';
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
//import Task from './components/Task'
import {useState, useEffect} from 'react'
//import { query, orderBy, onSnapshot} from "firebase/firestore"
import WaldoGame from './components/waldoGame';
import Header from './components/header';



function App() {

  const [level, setLevel] = useState({
      level: '',
      url: ''
  })

  const [timer, setTimer] = useState(0)
  const [timerToggle, setTimerToggle] = useState(false)
 // const storage = getStorage()

  

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


  // const [openAddModal, setOpenAddModal] = useState(false)
  // const [tasks, setTasks] = useState([])


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
  getImage();
}, []);

useEffect(() => {
  if (timerToggle) {
    setTimeout(() => {setTimer(timer + 1)}, '1000')
  }

}, [timer, timerToggle]);

async function getImage() {
 // const imgRef = query(collection(storage, 'images'))
 const storageRef = ref(storage);
 //const imagesRef = ref(storageRef, 'images/WWsocialgraphic20.jpg');
 const fileName = 'skiLevel.jpg';
 const skiRef = ref(storageRef, `images/${fileName}`);
 //const name = ski.name;

 let skiUrl = await getDownloadURL(skiRef)
 setLevel({
  level: 'skiLevel',
  url: skiUrl
 })
 //setLevel(imagee)
 // console.log(imagee)
  //console.log(name)

}

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
          <div>sdssds
            
         
        </div>
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

  // <div className='taskManager'>
      // <header>Task Manager</header>
      // <div className='taskManager__container'>
      //   <button 
      //     onClick={() => setOpenAddModal(true)}>
      //     Add task +
      //   </button>
      //   <button onClick={getImage}>get storage</button>
      //   <div className='taskManager__tasks'>
      
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