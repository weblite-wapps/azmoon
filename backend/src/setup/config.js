module.exports = {
  server: {
    port: 4230
  },
  mongo: {
    url: "mongodb://127.0.0.1:27017/azmoon",
    options: {
      // promiseLibrary: P,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      autoReconnect: true,
      reconnectTries: Number.MAX_VALUE,
      reconnectInterval: 1000
    }
  }
};
