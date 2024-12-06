const express =require('express')
const app = express()
const port = 3000
const bodyparser = require('body-parser')

app.get ('/',(req,res) =>{
    res.send('Azhar')
})

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

// import route posts
const postsRouter = require('./routes/posts.js')
// utk menggunakan route post di express
app.use('/api/posts', postsRouter)

app.listen(port, ()=>{
    console.log(`aplikasi berjalan di http://localhost:${port}`)
})