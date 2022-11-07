//기존 내용을 보존하면서 새로운 데이터를 파일 끝에 삽입

import * as path from 'path'
import { appendFile } from '../fileApi/appendFile'
import {mkdir} from '../fileApi/mkdir'

const appendTest = async(filename : string, data:any) => {
    const result = await appendFile(filename, data)
    console.log(`append ${result} to ${filename}`)
}

mkdir('./data')
  .then(s => appendTest('./data/hello.txt', 'Hi, there!'))
  .catch((e: Error) => console.log(e.message))