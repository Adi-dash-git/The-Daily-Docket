export default function TaskList({ tasks, updateTask, deleteTask }) {
    const toggleComplete = (index) => {
        const updatedTask = { ...tasks[index], completed: !tasks[index].completed }
        updateTask(updatedTask, index);
    }
    return (
        <ul className="task-list">
            {tasks.map((task, index) => (
                <li key={index} className={task.completed ? "completed" : ""}>
                    <div>
                        <span>
                            {task.text}
                            <small> ({task.priority}, {task.category}) </small>
                        </span>
                    </div>

                    <div>
                        <button onClick={() => toggleComplete(index)}>
                            {task.completed ? "Undo" : "Complete"}
                        </button>
                        <button
                            onClick={() => {
                                // Show confirmation dialog
                                const confirmDelete = window.confirm(
                                    "Are you sure you want to delete this task?"
                                );
                                if (confirmDelete) {
                                    deleteTask(index); // Proceed only if user clicks OK
                                }
                            }}
                        >
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    )
}