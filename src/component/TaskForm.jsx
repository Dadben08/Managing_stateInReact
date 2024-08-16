import React, { useState, useEffect } from 'react';

function TaskForm({ onAddTask, onUpdateTask, editTask }) {
  const [task, setTask] = useState({ name: '', description: '' });

  useEffect(() => {
    if (editTask) {
      setTask(editTask);
    }
  }, [editTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.name && task.description) {
      if (editTask) {
        onUpdateTask(task);
      } else {
        onAddTask(task);
      }
      setTask({ name: '', description: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={task.name}
        onChange={(e) => setTask({ ...task, name: e.target.value })}
        required
      />
      <textarea
        placeholder="Task Description"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
        required
      />
      <button type="submit">{editTask ? 'Update' : 'Add'} Task</button>
    </form>
  );
}

export default TaskForm;
