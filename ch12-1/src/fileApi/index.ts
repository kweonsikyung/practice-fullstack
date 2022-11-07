//export를 이용해 각기 다른 파일에 구현된 함수들을 모두 다시 내보내는 용의 파일

import { fileExists } from "./fileExists";
import { mkdir } from "./mkdir";
import { rmdir } from "./rmdir";
import { writeFile} from './writeFile';
import { readFile } from './readFile'
import { appendFile } from './appendFile';
import { deleteFile } from "./deleteFile";

export { fileExists, mkdir, rmdir, writeFile, readFile, appendFile, deleteFile}