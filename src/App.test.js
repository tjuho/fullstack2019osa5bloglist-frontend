import React from 'react'
import {
  render, waitForElement
} from 'react-testing-library'
jest.mock('./services/blogs')
import App from './App'


describe.skip('<App />', () => {
  it('if no user logged, blogs are not rendered', async () => {
    let component = null
    component = render(
      <App />
    )
    component.rerender(<App />)

    await waitForElement(
      () => component.getByText('login')
    )
    expect(component.container).toHaveTextContent(
      'login'
    )
    const blogs = component.container.querySelectorAll('.blog')
    expect(blogs.length).toBe(0)
  })
})
describe('<App />', () => {
  it('user is logged in and blogs are rendered', async () => {
    const user = {
      username: 'tester',
      token: '1231231214',
      name: 'Teuvo Testaaja'
    }

    localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
    let component = null
    component = render(
      <App />
    )
    component.rerender(<App />)

    await waitForElement(
      () => component.getByText('logout')
    )
    expect(component.container).toHaveTextContent(
      'logout'
    )
    const blogs = component.container.querySelectorAll('.blog')
    expect(blogs.length).toBe(3)
  })
})