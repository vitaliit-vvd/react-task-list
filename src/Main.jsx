import {useState, useEffect} from 'react';
import List from './components/List';
import { v4 as uuidv4 } from 'uuid';

function Main(){

  const [tasks,setTasks] = useState([{id: 0, title: 'Clean', status: false}])
  const [tasksTitle, setTasksTitle] = useState('');

  const addTask = (e) => {
    if (e.key === 'Enter' && e.target.value !== '') {
      setTasks([
        ...tasks, {
        id: uuidv4(),
          title: tasksTitle,
          status: false
        }
      ]);
      setTasksTitle('');
    }
  }

    return (
      <div className='container'>
        <h1>Note your tasks</h1>

        <div className='input-field'>
          <input type='text'
          value={tasksTitle}
          onChange={event => setTasksTitle(event.target.value)}
                 onKeyDown={addTask}
          />
          <label>Task name</label>
        </div>
        <List tasks={tasks} />
      </div>
    )
}

export default Main;
