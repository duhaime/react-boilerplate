module.exports = (app) => {

  app.get('/api/items', (req, res) => {
    res.status(200).send(['item-one', 'item-two'])
  })

  app.get('/api/records', (req, res) => {
    var query = {}
    if (req.query.record) {
      query.record = req.query.record
    }
    models.record.find(query,
      (err, data) => {
        if (err) return res.status(500).send({cause: err})
        return res.status(200).send(data)
    })
  })

  app.post('/api/records/new', (req, res) => {
    record = new models.record(req.body);
    record.save((err, data) => {
      if (err) return res.status(500).send({cause: err})
      return res.status(200).send(data)
    })
  })

  return app;
}