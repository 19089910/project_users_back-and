const cors = require('cors')//yarn add cors => protocolo de acesso, permite acesso
const express = require('express')
const uuid = require('uuid')
const port = 3001
const app = express()
app.use(express.json())
app.use(cors())//dentro do cors() se coloca as urls que permitimos acesso... vamos permitir tudo

const users = []//banco de dados


const checkOrdersId = (request, response, next) => { 
    const { id } = request.params 
    const index = orders.findIndex(user => user.id == id) 
 
    request.orderId = id 
    request.orderIndex = index 
     
    if(index < 0){ 
        return response.status(404).json({error: "order not found"}) 
    } 
    next() 
}

app.post('/users', (request, response) => {
    const {name, age} = request.body
    const user = {id:uuid.v4(), name, age}
    users.push(user)
    return response.status(201).json(user)
})

app.get('/users', (request, response)=> { 
    return response.status(200).json(users) 
});

app.listen(port, () => {
    console.log(`🚀 Server stared on port ${port}`)
})