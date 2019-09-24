export default process.env.NODE_ENV === 'production'
  ? 'https://wapp.weblite.me/azmoon'
  : 'http://localhost:4000/api'
