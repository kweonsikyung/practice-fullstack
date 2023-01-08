// import { connection } from 'mongoose'
import {connect} from '../mongodb/connect'

const makedbTest = async() => {
    let connection
    try{
        connection = await connect()
        const db = await connection.db('ch12-2')
        console.log('db', db)
    } catch(e){
        console.error(e)
    } 
}

makedbTest()