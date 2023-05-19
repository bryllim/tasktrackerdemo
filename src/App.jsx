import {useState} from 'react';
import NewTask from './NewTask';
import Task from './Task';

function App() {

  const [tasks, setTasks] = useState([
    {
      name: 'lorem ipsum',
      completed: false,
    },
    {
      name: 'ipsum doler sit',
      completed: true,
    },
    {
      name: 'doler amert sit',
      completed: false,
    }
  ]);

  const addTask = (task) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      task
    ]);
  }

  const taskList = tasks.map(task => (
    <Task name={task.name} completed={task.completed} />
  ));

  return (
    <div className="container mt-5 p-5 border shadow">
      <h1 className="fw-bold">Task Tracker</h1>

      <NewTask addTask={addTask}/>
      {taskList}
      
    </div>
  )
}

export default App
