import express from "express"
import cors from "cors"

const app = express()

app.use(cors())

app.listen('4000',()=>{
    console.log('server is on ')
})

app.get('/get',(req,res)=>{
    console.log('voce esta na rota get')
})

app.post('/post',(req,res)=>{
    console.log('voce esta na rota post')
})
app.put('/put',(req,res)=>{
    console.log('voce esta na rota put')
})
app.delete('/delete',(req,res)=>{
    console.log('voce esta na rota delete')
})