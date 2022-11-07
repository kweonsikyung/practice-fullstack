//기존 내용을 보존하면서 새로운 데이터를 파일 끝에 삽입

import * as fs from 'fs'

export const appendFile = (filename: string, data: any) : Promise<any> => 
  new Promise((resolve, reject) => {
    fs.appendFile(filename, data, 'utf8', (error : Error) => {
        error ? reject(error) : resolve(data)
    })
  })