import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import LoginForm from './components/LoginForm'
import AddBlogForm from './components/AddBlogForm'
import Notification from './components/Notification'
import Togglable from './components/Togglable';
import { useField } from './hooks'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  // const [newBlogTitle, setNewBlogTitle] = useState('')
  // const [newBlogAuthor, setNewBlogAuthor] = useState('')
  // const [newBlogUrl, setNewBlogUrl] = useState('')
  const [notification, setNotification] = useState(null)
  const username = useField('text')
  const password = useField('password')
  const blogTitle = useField('text')
  const blogAuthor = useField('text')
  const blogUrl = useField('text')

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs(blogs)
    )
  }, [])
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      if (user !== null) {
        blogService.setToken(user.token)
      }
    }
  }, [])
  const showNotification = (message) => {
    setNotification({
      message: message,
      type: 'info'
    })
    setTimeout(() => {
      setNotification(null)
    }, 7000)
  }
  const showError = (message) => {
    setNotification({
      message: message,
      type: 'error'
    })
    setTimeout(() => {
      setNotification(null)
    }, 7000)
  }
  const handleLogin = async (event) => {
    event.preventDefault()
    loginService
      .login({
        password: password.value,
        username: username.value
      })
      .then(user => {
        window.localStorage.setItem(
          'loggedBlogappUser', JSON.stringify(user)
        )
        blogService.setToken(user.token)
        setUser(user)
        username.reset()
        password.reset()
        // setUsername('')
        // setPassword('')
      })
      .catch(error => {
        showError(error.response.data.error)
      })
  }
  const handleLogout = async (event) => {
    event.preventDefault()
    setUser(null)
    window.localStorage.setItem('loggedBlogappUser', null)
  }

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value)
  // }
  // const handleUsernameChange = (event) => {
  //   setUsername(event.target.value)
  // }

  // const handleNewBlogTitleChange = (event) => {
  //   setNewBlogTitle(event.target.value)
  // }
  // const handleNewBlogAuthorChange = (event) => {
  //   setNewBlogAuthor(event.target.value)
  // }
  // const handleNewBlogUrlChange = (event) => {
  //   setNewBlogUrl(event.target.value)
  // }
  const handleAddBlog = (event) => {
    event.preventDefault()
    const blog = {
      title: blogTitle.value,
      author: blogAuthor.value,
      url: blogUrl.value
    }
    blogService
      .create(blog)
      .then(response => {
        blogTitle.reset()
        blogAuthor.reset()
        blogUrl.reset()
        setBlogs(blogs.concat(response))
        showNotification('new blog was added: ' + response.title)
      })
      .catch(error => {
        showError(error.response.data.error)
      })
  }
  const handleLike = (blog) => {
    return () => {
      const updatedBlog = {
        title: blog.title,
        author: blog.author,
        url: blog.url,
        likes: blog.likes + 1,
        user: blog.user
      }
      const id = blog.id
      blogService
        .update(id, updatedBlog)
        .then(response => {
          setBlogs(blogs.map(blog => blog.id !== id ? blog : response))
        })
        .catch(error => {
          showError(error.response.data.error)
        })
    }
  }
  const handleRemove = (blog) => {
    return () => {
      const id = blog.id
      blogService
        .remove(id)
        .then(response => {
          setBlogs(blogs.filter(function (blog) {
            return blog.id !== id
          }))
        })
        .catch(error => {
          showError(error.response.data.error)
        })
    }
  }
  if (user === null) {
    return (
      <div>
        <Notification notification={notification} />
        <LoginForm
          username={username}
          // handleUsernameChange={handleUsernameChange}
          password={password}
          // handlePasswordChange={handlePasswordChange}
          handleLogin={handleLogin} />
      </div>
    )
  }
  return (
    <div>
      <h2>blogs</h2>
      <p>
        {user.username} logged in
        <button onClick={handleLogout}>logout</button >

      </p>
      <Togglable buttonLabel='add new blog'>
        <AddBlogForm handleAddBlog={handleAddBlog}
          blogTitle={blogTitle}
          blogAuthor={blogAuthor}
          blogUrl={blogUrl} />
      </Togglable>
      {
        blogs
          .sort(function (a, b) {
            return b.likes - a.likes
          })
          .map(blog =>
            <Blog key={blog.id}
              blog={blog}
              handleLike={handleLike(blog)}
              handleRemove={handleRemove(blog)}
              loggedUser={user} />
          )
      }
    </div >
  )
}


export default App