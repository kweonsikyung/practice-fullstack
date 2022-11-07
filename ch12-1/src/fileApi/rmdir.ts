//특정 디렉터리 삭제
//nodejs에서도 fs.rmdir 함수를 통해 삭제할 수 있으나 비어있지 않은 디렉터리는 삭제하지 못한다
//따라서 rimraf 패키지를 이용해 비어있지 않은 디렉터리도 삭제한다

import rimraf from "rimraf";
// import { resolve } from "path";
import { fileExists } from "./fileExists";

export const rmdir = (dirname : string ): Promise<string> => 
    new Promise(async (resolve, reject) => {
        const alreadyExists = await fileExists(dirname)
            !alreadyExists ? resolve(dirname) 
            : rimraf(dirname, error => error ? reject(error) : resolve(dirname))
    })