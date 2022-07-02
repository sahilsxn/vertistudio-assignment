import React from 'react'
import './postBlock.css'

const PostBlock = ({postItem}) => {
  return (
    <div>
    {Object.keys(postItem).length > 0 &&
      <div className='post-block'>
        <img src={postItem.image} alt={postItem.title}/>
        <h3>{postItem.title}</h3>
        <p>by <span>{postItem.author}</span> / <span>{postItem.category}</span> / <span>{postItem.date}</span></p>
        <article>{postItem.postContent.slice(0,140)} <button className='read-more'>Read More</button></article>
      </div>
    }
    </div>
  )
}

export default PostBlock