import { connect } from "mongoose"

const dbconnection = async () =>{
    try {
        await connect(process.env.MONGO_CNN)
        console.log('connect to mongo db  ')
    }catch(errpor){
        console.log('problemas con mongo db ')
    }
}
export default dbconnection