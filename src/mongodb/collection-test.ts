// import { connection } from 'mongoose'
import {connect} from '../mongodb/connect'

const makeCollectionsTest = async() => {
    let connection
    try{
        connection = await connect()
        const db = await connection.db('ch12-2')
        const personCollection = db.connection('person')
        const addressesCollection = db.connection('addresses')
        console.log(personCollection, addressesCollection)
    } catch(e){
        console.error(e)
    } 
}

makeCollectionsTest()