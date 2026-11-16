import React from 'react'
import './TaskCard.css';
import Tag from './Tag';
import deletIcon from "../assets/delete.png"

export const TaskCard = ({title, tags}) => {
  return (
    <article className='task_card'>
      <p className='task_text'>{title}</p>
      <div className='task_card_bottom_line'>
         <div className="task_card_tag">
            {
              tags.map((tag, index) => 
              <Tag key={index} 
               tagname={tag}
               selected={true}
              />)
            }
         </div>
         <div className="task_delete">
          <img src= {deletIcon} className='delete_icon' alt="" />
         </div>
      </div>

    </article>
  )
}
