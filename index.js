const express = require('express')
const port = 3001
const app = express()
app.use(express.json())

app.listen(port, () => {
    console.log(`🚀 Server stared on port ${port}`)
})