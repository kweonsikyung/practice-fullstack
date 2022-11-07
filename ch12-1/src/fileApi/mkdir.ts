//파일이나 디렉터리가 있는지를 판단해 없을때만 디렉터리 생성

import mkdirp from "mkdirp";
// import { resolve } from "path";
import { fileExists } from "./fileExists";

export const mkdir = (dirname : string ): Promise<string> => 
    new Promise(async (resolve, reject) => {
        const alreadyExists = await fileExists(dirname)
            alreadyExists ? resolve(dirname) 
            : mkdirp(dirname).then(resolve).catch(reject)
    })