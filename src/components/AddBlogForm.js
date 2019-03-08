import React from 'react'

const AddBlogForm = ({ handleAddBlog, blogTitle, handleBlogTitleChange,
  blogAuthor, handleBlogAuthorChange,
  blogUrl, handleBlogUrlChange }) => {
  return (
    <div>
      <form onSubmit={handleAddBlog}>
        title:
        <input value={blogTitle} onChange={handleBlogTitleChange} />
        <br />
        author:
        <input value={blogAuthor} onChange={handleBlogAuthorChange} />
        <br />
        url:
        <input value={blogUrl} onChange={handleBlogUrlChange} />
        <br />
        <button type='submit'>add</button>
      </form>
    </div>
  )
}

export default AddBlogForm

AddBlogForm.propTypes = {
  handleAddBlog: PropTypes.func.isRequired,
  handleBlogTitleChange: PropTypes.func.isRequired,
  handleBlogAuthorChange: PropTypes.func.isRequired,
  handleBlogUrlChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  blogTitle: PropTypes.string.isRequired,
  blogAuthor: PropTypes.string.isRequired,
  blogUrl: PropTypes.string.isRequired,
}