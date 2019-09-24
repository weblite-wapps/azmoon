module.exports = {
  server: {
    port: 4000,
  },
  mongo: {
    url: 'mongodb://127.0.0.1:27017/azmoon',
    options: {
      // promiseLibrary: P,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      autoReconnect: true,
      reconnectTries: Number.MAX_VALUE,
      reconnectInterval: 1000,
    },
  },
}
