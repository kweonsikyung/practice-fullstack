//파일이 존재하는지 판별해 존재할 때만 파일 삭제

import * as fs from 'fs'
import { fileExists } from './fileExists'

export const deleteFile = (filename : string ) : Promise<string> => 
    new Promise<any>(async(resolve, reject) => {
    const alreadyExists = await fileExists(filename)
    !alreadyExists ? resolve(filename) : 
        fs.unlink(filename, (error) => error ? reject(error) : resolve(filename))
})