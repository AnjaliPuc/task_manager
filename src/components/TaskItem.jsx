export default function TaskItem({ task, onDeleteTask, onToggleTask }) {
  const { id, description, completed } = task;

  return (
    <li className="task-item">
      <label className="task-content">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggleTask(id)}
        />
        <span className={`task-text ${completed ? "completed" : ""}`}>
          {description}
        </span>
      </label>

      <button className="delete-btn" onClick={() => onDeleteTask(id)}>
        Delete
      </button>
    </li>
  );
}
