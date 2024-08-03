const express= require("express")
const app = express()
const PORT= 3000;
const controller = require("../server/controllers/controll")
const cors = require("cors")
const path = require("path")

app.use(express.static(path.join(__dirname,'build')))
app.use(express.json())
app.use(cors())

app.post("/post", controller.createPost)
app.get("/get", controller.get_data)

app.get('*',(req,res)=>(
   res.sendFile(path.join(__dirname,'build','index.html'))
))

app.listen(PORT,()=>{
   console.log("server sucessfully started on PORT-3000")
})


