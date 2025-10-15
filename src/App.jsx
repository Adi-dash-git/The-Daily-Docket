import TaskList from "./Components/TaskList"
import Taskform from "./Components/Taskform"
import ProgressTracker from "./Components/ProgressTracker"

export default function App() {
  return(
    <div>
      <h1>The Daily Docket</h1>
      <p>Our friendly Task-Manager</p>
      <TaskList />
      <Taskform />
      <ProgressTracker />
      <button>Clear All Tasks</button>
    </div>
  )
}
