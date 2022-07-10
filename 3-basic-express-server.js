const express = require('express')
const path = require('path')
const app = express()

// app.use is used to setup middleware.
// static asset is a file that the server doesn't have to change. public is the common name.
app.use(express.static('./public'))

// when the user hits the homepage of the website, what needs to be sent.
// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//     Two options of sending back static pages.
//     Adding them to "static"
//     SSR (server side rendering)
// })

// for everything else.
app.all('*', (req, res) => {
    res.status(400).send('resource not found')
})

app.listen(5001, () => {
    console.log('listening to port 5001')
})