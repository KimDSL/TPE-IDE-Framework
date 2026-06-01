import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5000/api/tasks";

function TaskDetail() {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${API_URL}/${id}`)
      .then(res => {
        setTask(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erreur chargement tâche :", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Chargement...</p>;
  if (!task) return <p>Tâche introuvable.</p>;

  return (
    <div>
      <Link to="/">Retour au dashboard</Link>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>Statut : {task.status}</p>
    </div>
  );
}

export default TaskDetail;