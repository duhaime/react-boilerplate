var path = require('path')
var apiRoutes = require('./apiRoutes')

module.exports = (app) => {

  apiRoutes(app)

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
  })

  return app;
}