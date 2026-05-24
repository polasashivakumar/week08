import exp from 'express'
import { connect } from 'mongoose'
import { config } from 'dotenv'
import { UserApi } from './Apis/UserApi.js'
import cors from 'cors'
config()

const PORT = process.env.PORT


const app = exp()

// body parser middle ware
app.use(exp.json())
// cookie parser middle ware 
app.use(cors({
    origin: ['http://localhost:5173',
             'https://week08-usermanagement.vercel.app']
}));
// Api's
app.use('/user-api',UserApi)


// connect DB
const  ConnectDb=async ()=>{
    try{
        await connect(process.env.DB_URL)
        app.listen(PORT,()=>{
            console.log(`server started at PORT ${PORT}`)
        })
    }
    catch(err){
        console.log(`server not started due to ${err}`)
    }

}

await ConnectDb()
