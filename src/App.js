//import logo from './logo.svg';
import './App.css';
import {db} from './firebase';
import {collection, addDoc, Timestamp} from 'firebase/firestore'
import AddTask from './components/addTask'

import Task from './components/Task'
import {useState, useEffect} from 'react'
import { query, orderBy, onSnapshot} from "firebase/firestore"

function App() {

  const [openAddModal, setOpenAddModal] = useState(false)
  const [tasks, setTasks] = useState([])


useEffect(() => {
  const taskColRef = query(collection(db, 'tasks'), orderBy('created', 'desc'))
  onSnapshot(taskColRef, (snapshot) => {
    setTasks(snapshot.docs.map(doc => ({
      id: doc.id,
      data: doc.data()
    })))
  })
},[])

  return (
    <div className="App">
      <h2>Photo Tag App</h2>

      <div className='taskManager'>
      <header>Task Manager</header>
      <div className='taskManager__container'>
        <button 
          onClick={() => setOpenAddModal(true)}>
          Add task +
        </button>
        <div className='taskManager__tasks'>

          {tasks.map((task) => (
            <Task
              id={task.id}
              key={task.id}
              completed={task.data.completed}
              title={task.data.title} 
              description={task.data.description}
            />
          ))}

        </div>
      </div>

      {openAddModal &&
        <AddTask onClose={() => setOpenAddModal(false)} open={openAddModal}/>
      }

    </div>
      


    </div>
  );
}

export default App;
