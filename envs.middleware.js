module.exports = (req, res) => {
  res.status(200)
    .set('Content-Type', 'application/json')
    .json({
      API_URL: process.env.API_URL,
    })
}
