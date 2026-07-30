import React from 'react'
import './TaskCard.css';
import Tag from './Tag';
import deletIcon from "../assets/delete.png"

export const TaskCard = (props) => {
  return (
    <article className='task_card'>
      <p className='task_text'>This is sample text</p>
      <div className='task_card_bottom_line'>
         <div className="task_card_tag">
            <Tag tagname = "HTML"/>
            <Tag tagname = "CSS"/>
         </div>
         <div className="task_delete">
          <img src= {deletIcon} className='delete_icon' alt="" />
         </div>
      </div>

    </article>
  )
}
