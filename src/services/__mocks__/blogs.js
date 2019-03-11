let token = null
const blogs = [
  {
    id: '5a451df7571c224a31b5c8ce',
    title: 'HTML on helppoa',
    author: 'author',
    likes: 1,
    user: {
      _id: '5a437a9e514ab7f168ddf138',
      username: 'juuseri',
      name: 'Matti Luukkainen'
    }
  },
  {
    id: '5a451e21e0b8b04a45638211',
    title: 'Selain pystyy suorittamaan vain javascriptiä',
    author: '2019-01-28T16:38:57.694Z',
    likes: 1,
    user: {
      _id: '5a437a9e514ab7f168ddf138',
      username: 'user',
      name: 'Matti Luukkainen'
    }
  },
  {
    id: '5a451e30b5ffd44a58fa79ab',
    title: 'HTTP-protokollan tärkeimmät metodit ovat GET ja POST',
    author: '2019-01-28T16:39:12.713Z',
    likes: 1,
    user: {
      _id: '5a437a9e514ab7f168ddf138',
      username: 'user',
      name: 'Matti Luukkainen'
    }
  }
]

const getAll = () => {
  return Promise.resolve(blogs)
}
const setToken = (newToken) => {
  token = newToken
}
export default { getAll, setToken }