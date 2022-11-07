//파일이나 디렉터리가 있는지 확인

import { fileExists } from "../fileApi/fileExists";

const exists = async(filepath) => {
    const result = await fileExists(filepath)
    console.log(`${filepath} ${result ? 'exists' : 'not exists'}`)
}

exists('./package.json')
exists('./pakage')