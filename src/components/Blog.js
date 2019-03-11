import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Blog = ({ blog, handleLike, handleRemove, loggedUser }) => {
  const [visible, setVisible] = useState(false)

  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }
  // if (blog.user === undefined) {
  //   blog.user.username = 'anon'
  // }
  const username = blog.user === undefined ?
    'anon' : blog.user.username
  const removeVisible =
    { display: username === loggedUser.username ? '' : 'none' }
  return (
    <div className='blog'>
      <div onClick={toggleVisibility} className='blogHeader'>
        {blog.title} {blog.author}
      </div>
      <div style={showWhenVisible} className='togglableContent'>
        {blog.url}
        <br />
        {blog.likes} likes
        <button onClick={handleLike}>like</button>
        <br />
        added by {username}
        <div style={removeVisible}>
          <button onClick={handleRemove}>remove</button>
        </div>
      </div>
    </div>
  )
}

export default Blog

Blog.propTypes = {
  // handleLike: PropTypes.func.isRequired,
  // handleRemove: PropTypes.func.isRequired,
  blog: PropTypes.object.isRequired,
  loggedUser: PropTypes.object.isRequired,
}