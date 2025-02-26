import { PrismaClient } from "@prisma/client"
import express from "express"

const app = express()
const prismaClient = new PrismaClient()

app.get("/",async (req,res) =>{

    const data = await prismaClient.user.findMany();
    
    


    res.json({
        "message":data
    })
})


app.post("/",async (req,res) =>{

    await prismaClient.user.create({

        data:{


                username:Math.random().toString(),
                password:Math.random().toString()
                
             }
        
    })


    res.json({
        "message":"Posrt end point is wokring"
    })

   
})


app.listen(3000)
console.log("server stated")

