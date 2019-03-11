import React from 'react'
import PropTypes from 'prop-types'

const AddBlogForm = ({ handleAddBlog,
  blogTitle,
  blogAuthor,
  blogUrl }) => {
  return (
    <div>
      <form onSubmit={handleAddBlog}>
        title:
        <input
          value={blogTitle.value}
          onChange={blogTitle.onChange}
          type={blogTitle.type} />
        <br />
        author:
        <input
          value={blogAuthor.value}
          onChange={blogAuthor.onChange}
          type={blogAuthor.type} />        <br />
        url:
        <input
          value={blogUrl.value}
          onChange={blogUrl.onChange}
          type={blogUrl.type} />        <br />
        <button type='submit'>add</button>
      </form>
    </div>
  )
}

export default AddBlogForm

AddBlogForm.propTypes = {
  handleAddBlog: PropTypes.func.isRequired,
  blogTitle: PropTypes.object.isRequired,
  blogAuthor: PropTypes.object.isRequired,
  blogUrl: PropTypes.object.isRequired,
}