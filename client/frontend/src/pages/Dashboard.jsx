import { useState, useEffect } from "react";
import axios from "axios";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";

const API_URL = "http://localhost:5000/api/tasks";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then(res => setTasks(res.data))
      .catch(err => console.error("Erreur chargement tâches :", err));
  }, []);

  async function handleAddTask(nouvelleTache) {
    try {
      const res = await axios.post(API_URL, {
        title: nouvelleTache.titre,
        description: nouvelleTache.description,
        completed: false   // ← corrigé
      });
      if (res.status === 201) {
        setTasks([...tasks, res.data]);
      }
    } catch (err) {
      console.error("Erreur ajout tâche :", err);
    }
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <TaskForm onAddTask={handleAddTask} />
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  );
}

export default Dashboard;