import { useState, useEffect } from "react";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";

function Dashboard() {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("taskflow_data");
    return stored ? JSON.parse(stored) : [
      {
        id: 1,
        titre: "Conception de l'ontologie",
        description: "Rédiger les axiomes de base du domaine.",
        statut: "A faire"
      },
      {
        id: 2,
        titre: "Analyse des besoins",
        description: "Identifier les exigences fonctionnelles.",
        statut: "En cours"
      }
    ];
  });

  useEffect(() => {
    localStorage.setItem("taskflow_data", JSON.stringify(tasks));
  }, [tasks]);

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
}

export default Dashboard;