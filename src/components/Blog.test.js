import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Blog from './Blog'

describe('<Blog />', () => {
  let component

  beforeEach(() => {
    const user = {
      username: 'user'
    }
    const blog = {
      title: 'title',
      author: 'author',
      url: 'url',
      likes: 0,
      user: user
    }
    component = render(
      <Blog loggedUser={user} blog={blog} />
    )
  })

  it('at start title and author are displayed', () => {
    const div = component.container.querySelector('.blog')

    expect(div).toHaveTextContent('title')
    expect(div).toHaveTextContent('author')

  })

  it('at start the details are not displayed', () => {
    const div = component.container.querySelector('.togglableContent')

    expect(div).toHaveStyle('display: none')
  })

  it('after clicking the button, children are displayed', () => {
    const button = component.container.querySelector('.blogHeader')
    fireEvent.click(button)

    const div = component.container.querySelector('.togglableContent')
    expect(div).not.toHaveStyle('display: none')
  })

})