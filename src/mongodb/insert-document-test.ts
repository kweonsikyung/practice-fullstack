// import { connection } from 'mongoose'
import {connect} from '../mongodb/connect'

const insertdocumentTest = async() => {
    let connection, cursor
    try{
        connection = await connect()
        const db = await connection.db('ch12-2')
        const personCollection = db.collection('person')
        const addressesCollection = db.collection('addresses')

        const person = {name: 'Jack', age: 32}
        let result = await personCollection.insertOne(person)
        console.log(result)

        const address = { country: 'korea', city:' Seoul'}
        result = await addressesCollection.insertOne(address)
        console.log(result)

    } catch(e){
        console.error(e)
    } 
}

insertdocumentTest()