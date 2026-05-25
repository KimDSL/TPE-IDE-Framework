import { useState } from "react";
import TaskCard from "../components/TaskCard";
import TaskCard from "../components/TaskForm";

function Dashboard() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      titre: "Conception de l’ontologie",
      description: "Rédiger les axiomes de base du domaine.",
      statut: "A faire"
    },
    {
      id: 2,
      titre: "Analyse des besoins",
      description: "Identifier les exigences fonctionnelles.",
      statut: "En cours"
    }

  ]);
}

function handleAddTask(nouvelleTache) {
  setTasks([...tasks, nouvelleTache]);
}

return (
  <div>
    <h1>Dashboard</h1>

    <TaskForm onAddTask={handleAddTask} />

    {tasks.map((task) => (
      <TaskCard key={task.id} task={task} />
    ))}
  </div>
);

export default Dashboard;