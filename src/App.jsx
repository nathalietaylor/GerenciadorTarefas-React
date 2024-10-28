import AddTask from "./components/addTask";
import Tasks from "./components/tasks";

function App() {
  return (
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <AddTask />
      <Tasks />
    </div>
  );
}

export default App;
