//makeFakeData를 사용해 numberOfItems만큼 IFake 객체를 생성한다
//그리고 속성명과 속성값의 배열을 각각 추출해 filename 파일을 만든다

import * as path from 'path'
import {IFake, makeFakeData} from './makeFakeData'
import { mkdir, writeFile, appendFile } from '../fileApi'
import { range } from '../utils/range'

export const writeCsvFormatFakeData =async (filename:string,
    numberOfItems : number): Promise<string> => {
        const dirname = path.dirname(filename)
        await mkdir(dirname)

        const comma = ', ', newLine = '\n'
        for(let n of range(numberOfItems)){
            const fake : IFake = makeFakeData()
            if( n==0 ) {
                const keys = Object.keys(fake).join(comma)
                await writeFile(filename, keys)
            }
            //객체의 속성 이름을 생략한 채 속성값만 한줄한줄 파일에 쓰기 위한 코드 22-23
            const values = Object.values(fake).join(comma)
            await appendFile(filename, newLine + values)
        }

        return `write ${numberOfItems} items to ${filename} file`
    
}