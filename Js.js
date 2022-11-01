const express = require('express')

const PORT = 3000

const app = new express()

app.get('/',(req, res) =>{
    console.log('get na /')

    res.sendFile(path.resolve('Explorel.....', 'git-info.html'))
})

app.listen(PORT, () => {
    console.log('start  127.0.0.1 localhost')
    console.log(`http://127.0.0.1:${PORT}`)
})    