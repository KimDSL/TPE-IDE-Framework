import { useParams } from "react-router-dom";

function TaskDetail() {
  const { id } = useParams();

  const stored = localStorage.getItem("taskflow_data");
  const tasks = stored ? JSON.parse(stored) : [];
  const task = tasks.find((t) => String(t.id) === String(id));

  if (!task) {
    return <p>Tâche introuvable.</p>;
  }

  return (
    <div>
      <h1>{task.titre}</h1>
      <p>{task.description}</p>
      <p>Statut : {task.statut}</p>
    </div>
  );
}

export default TaskDetail;