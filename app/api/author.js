module.exports = (app, db) => {
    app.post('/author', async (req, res) => {
      await db.Author.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      }).then((result) => res.json(result))
    })
  
    app.get('/authors', async (req, res) => {
      await db.Author.find({}
      ).then((result) => {
        return res.json(result)
      })
    })
  }