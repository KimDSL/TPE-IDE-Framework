function TaskCard({ task }) {
  return (
    <div>
      <h3>{task.titre}</h3>
      <p>{task.description}</p>
      <small>{task.statut}</small>
    </div>
  );
}

export default TaskCard;