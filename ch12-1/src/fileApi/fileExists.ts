//파일이나 디렉터리가 있는지 확인

import * as fs from 'fs'
import { resolve } from 'path'

export const fileExists = (filepath : string ) : Promise<boolean> =>
    new Promise(resolve => fs.access(filepath, error => resolve(error ? false : true)))
