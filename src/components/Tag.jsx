import React from 'react'
import './tag.css';

const Tag = ({tagname, selectTag}) => {
  return (
    <button 
      type='button'
      className='tag' 
      onClick={() => selectTag(tagname)}>
      {tagname}
    </button>

  )
}

export default Tag