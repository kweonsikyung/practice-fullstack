import { deleteFile } from "../fileApi/deleteFile";
import {rmdir} from '../fileApi/rmdir'

const deleteTest = async(filename: string) => {
    const result = await deleteFile(filename)
    
}