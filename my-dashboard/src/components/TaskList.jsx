import { useState } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Check delivery status", completed: false },
    { id: 2, title: "Contact delivery partner", completed: false },
    { id: 3, title: "Review pending parcels", completed: true },
  ]);

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <h3 className="text-lg font-semibold mb-4">Task List</h3>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex justify-between items-center p-2 border border-gray-200 rounded ${
              task.completed ? "bg-green-100 line-through" : ""
            }`}
          >
            <span>{task.title}</span>
            <div className="space-x-2">
              <button
                onClick={() => toggleComplete(task.id)}
                className="px-2 py-1 text-white bg-blue-500 rounded"
              >
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                className="px-2 py-1 text-white bg-red-500 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
