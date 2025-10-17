import TaskList from "./Components/TaskList"
import Taskform from "./Components/Taskform"
import ProgressTracker from "./Components/ProgressTracker"
import { useEffect, useState } from "react"
import "./Style.css";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks))
  })

  const addTask = (task) => {
    setTasks([...tasks, task])
  }

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index));
  }

  return (
    <div>
      <h1>THE DAILY DOCKET</h1>
      <p><h2>Our friendly Task-Manager</h2></p>      
      <Taskform addTask={addTask} />
      <TaskList tasks = {tasks} 
      updateTask = {updateTask}
      deleteTask = {deleteTask} />
      <ProgressTracker tasks = {tasks} />
      <button>Clear All Tasks</button>
    </div>
  )
}
