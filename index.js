const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

app.use(express.json())

const port = 5000;


const user = [
    {id:0,name:'ashik', email : "ashik@gmail.com"},
    {id:1,name:'ashik', email : "ashik@gmail.com"},
    {id:2,name:'ashik', email : "ashik@gmail.com"},
    {id:3,name:'ashik', email : "ashik@gmail.com"}
]

app.get('/', (req, res) => {
    res.send('Hello ')
  })

 

app.post('/ashik', (req , res)=> {
    console.log('hitting the post',req.body)
    const newUser = req.body
    newUser.id = user.length
    user.push(newUser)
    
    res.json(newUser)
})

app.get('/ashik', (req, res)=> {
    
    res.send(user)

}) 

  
app.listen(port , ()=> {
    console.log('connecting user from', port  )
})