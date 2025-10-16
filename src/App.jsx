import TaskList from "./Components/TaskList"
import Taskform from "./Components/Taskform"
import ProgressTracker from "./Components/ProgressTracker"
import { useEffect, useState } from "react"

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect( () => {
    localStorage.setItem("task", JSON.stringify(tasks))
  })

  const addTask = (task) => {
    setTasks([...tasks, task])
  }

  return(
    <div>
      <h1>The Daily Docket</h1>
      <p><h2>Our friendly Task-Manager</h2></p>
      <TaskList />
      <Taskform addTask = {addTask} />
      <ProgressTracker />
      <button>Clear All Tasks</button>
    </div>
  )
}
