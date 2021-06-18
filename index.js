const express = require('express')

const app = express()

//Routes
app.use('/', require('./src/routes'));

const port = 3001;
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})