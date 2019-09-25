export default process.env.NODE_ENV === 'production'
  ? 'https://wapp.weblite.me/azmoon/api'
  : 'http://localhost:4230/api'
