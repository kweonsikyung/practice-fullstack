//파일이나 디렉터리가 있는지를 판단해 없을때만 디렉터리 생성

import { mkdir } from "../fileApi/mkdir";

const makeDataDir = async(dirname : string ) => {
    let result = await mkdir(dirname)
    console.log(`'${result}' dir created`)
}
makeDataDir('./data/today')