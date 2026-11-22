import React from 'react'
import './TaskCard.css';
import Tag from './Tag';
import deletIcon from "../assets/delete.png"

export const TaskCard = ({ title, tags, handleDelete, index, setActiveCard }) => {
  return (
    <article className='task_card'
      draggable
      onDragStart={() => setActiveCard(index)}
      onDragEnd={() => setActiveCard(null)}
    >
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
        <div className="task_delete" onClick={() => handleDelete(index)}>
          <img src={deletIcon} className='delete_icon' alt="" />
        </div>
      </div>

    </article>
  )
}
