import { Link } from "react-router-dom";

function TaskCard({ task }) {
  return (
    <Link to={`/task/${task.id}`}>
      <div>
        <h3>{task.titre}</h3>
        <p>{task.description}</p>
        <small>{task.statut}</small>
      </div>
    </Link>
  );
}

export default TaskCard;