import { useState } from "react";
import AddTask from "./components/addTask";
import Tasks from "./components/tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "tarefa 1",
      description: "descrição da tarefa 1",
      isCompleted: false,
    },
    {
      id: 2,
      title: "tarefa 2",
      description: "descrição da tarefa 2",
      isCompleted: false,
    },
    {
      id: 3,
      title: "tarefa 3",
      description: "descrição da tarefa 3",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      } else {
        return task;
      }
    });

    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} />
      </div>
    </div>
  );
}

export default App;
