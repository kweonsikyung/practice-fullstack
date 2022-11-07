//디렉터리 생성 후, txt/json 파일 생성과 내용 작성

import * as fs from 'fs'

export const writeFile = (filename : string, data: any) : Promise<any> =>
    new Promise((resolve, reject) => {
        fs.writeFile(filename, data, 'utf8', (error: Error)=>{
            error ? reject(error) : resolve(data)
        })
    })