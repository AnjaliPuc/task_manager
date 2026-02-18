import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDeleteTask, onToggleTask }) {
  return (
    <div className="list">
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDeleteTask={onDeleteTask}
            onToggleTask={onToggleTask}
          />
        ))}
      </ul>
    </div>
  );
}
