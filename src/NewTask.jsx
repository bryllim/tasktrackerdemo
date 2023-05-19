import {useState} from 'react';

function NewTask({addTask}) {

  const [task, setTask] = useState({
    name: '',
    completed: false,
  });

  const handleTextChange = (text) => {
    setTask({
        name: text.target.value,
        completed: false,
    });
  }

  const newTask = () => {
    addTask(task);
  }

  return (
    <div className="row">
      <div className="col-md-9">
        <input
          className="mt-4 form-control"
          type="text"
          placeholder="Write your new task here..."
          onChange={handleTextChange}
        />
      </div>
      <div className="col-md-3 d-grid">
        <button onClick={newTask} className="btn btn-primary">+ Add Task</button>
      </div>
    </div>
  );
}

export default NewTask;
