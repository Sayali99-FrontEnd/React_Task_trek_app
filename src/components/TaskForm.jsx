import React, {useState} from 'react';
import  "./TaskForm.css";
import Tag from './Tag';

const TaskForm = () => {
const [task, setTask] = useState();
console.log(task)
  return (
      <header className="app_header">
       <form>
          <input 
          type='text'
          className='task_input'
          placeholder='Enter your task'
          onChange={(e) => setTask(e.target.value)}
          />

          <div className="task_From_bottom_line">
            <div>
                <Tag tagname = "HTML" />
                <Tag tagname = "CSS"/>
                <Tag tagname = "Javascript"/> 
                <Tag tagname = "React"/> 
            </div>
            <div>
                <select className='task_status'>
                <option value="todo">TODO</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
                </select>
                <button type='submit' className='task_submit'>+Add Task</button>
            </div>
          </div>
       </form>

      </header>
  )
}

export default TaskForm