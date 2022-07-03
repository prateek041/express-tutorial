const express = require('express') // this returns a function.
const app = express() // similar to create server.

app.get('/', (req, res) => {  // this callback function will be invoked every time the user perform get request on our '/' root page.
    res.status(200).send('home page')
})

app.get('/about', (req, res) => {
    res.status(200).send('about page')
})

app.all('*', (req, res) => {
    res.status(404).end('<h1>Resource not found</h1>')
})

app.listen(5001, () => { // for everything else
    console.log('server is listening to port 5001')
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use for middleware
// app.listen