import express from 'express';
import cors from 'cors'
import serviceRouter from './routes/service.routes.js'
import contactRouter from './routes/contact.routes.js'


const app = express();


app.use(express.json())

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))


app.use('/api/service',serviceRouter)
app.use('/api/contact',contactRouter)




export default app;