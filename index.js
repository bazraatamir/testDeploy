import express from "express"
import cors from "cors"

const app = express()


app.use(cors())

app.get("/",(req,res)=>{
    res.json({
        message:"hello world"
    })
})

app.get("/:id",(req,res)=>{
    res.json({
        message:"hello world 1"
    })
})

app.listen(3000)