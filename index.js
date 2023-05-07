const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const todos = [
    {
      title: "Todo 1",
      desc: "This is my first Todo",
      completed: true,
    },
    {
      title: "Todo 2",
      desc: "This is my second Todo",
      completed: true,
    }
]

app.get("/todos", (request, response) => {
    response.status(200).json(todos);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})