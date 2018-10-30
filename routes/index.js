module.exports = (app) => {
  require('./htmlRoutes')(app)
  require('./bookRoutes')(app)
}