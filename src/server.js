import express from 'express'
import cors from 'cors'
import routes from './routes.js'

const app = express()
app.use(express.json())
app.use(cors());
app.use(routes)
const port = process.env.PORT || 8081;




app.listen(port,()=> {
   console.log(`Server port ${port}`)
})