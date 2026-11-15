import React, { useState } from 'react';
import "./TaskForm.css";
import Tag from './Tag';

const TaskForm = () => {

  //one single handlefunction for multiple input fields
  const [taskData, setTaskData] = useState({
    task: '',
    status: 'todo',
    tags: []
  });

  const selectTag = (tag) => {
    if (taskData.tags.some(item => item === tag)) {
      const filterTags = taskData.tags.filter(item => item !== tag)
      setTaskData(prev => {
        return { ...prev, tags: filterTags }
      })
    } else {
      setTaskData(prev => {
        return { ...prev, tags: [...prev.tags, tag] }
      })

    }
  };
console.log(taskData.tags);

  const HandleChange = (e) => {
    const { name, value } = e.target

    // set values in our object
    setTaskData(prev => {
      return { ...prev, [name]: value }
    })

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
  }


  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          name='task'
          type='text'
          className='task_input'
          placeholder='Enter your task'
          onChange={HandleChange}
        />

        <div className="task_From_bottom_line">
          <div>
            <Tag tagname="HTML"  selectTag = {selectTag} />
            <Tag tagname="CSS" selectTag = {selectTag} />
            <Tag tagname="Javascript" selectTag = {selectTag} />
            <Tag tagname="React"  selectTag = {selectTag}/>
          </div>
          <div>
            <select
              name='status'
              className='task_status'
              onChange={HandleChange}>
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