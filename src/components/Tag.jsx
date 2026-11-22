import React from 'react'
import './tag.css';

const Tag = ({ tagname, selectTag, selected }) => {
  const tagStyle = {
    HTML: { backgroundColor: '#fda821' },
    CSS: { backgroundColor: '#15d4c8' },
    Javascript: { backgroundColor: '#ffd12c' },
    React: { backgroundColor: '#4cdafc' },
    default: { backgroundColor: '#f9f9f9' },
  }

  return (
    <button
      type='button'
      className='tag'
      style={selected ? tagStyle[tagname] : tagStyle.default}
      onClick={() => selectTag(tagname)}>
      {tagname}
    </button>

  )
}

export default Tag