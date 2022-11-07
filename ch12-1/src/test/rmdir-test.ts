//특정 디렉터리 삭제

import {rmdir} from '../fileApi/rmdir'

const deleteDataDir = async(dir) => {
    const result = await rmdir(dir)
    console.log(`'${result}' dir deleted`)
}
deleteDataDir('./data/today')