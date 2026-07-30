import React from 'react'
import './tag.css';

const Tag = (props) => {
  return (
    console.log(props, "props"),
    <button className='tag'>{props.tagname}</button>

  )
}

export default Tag