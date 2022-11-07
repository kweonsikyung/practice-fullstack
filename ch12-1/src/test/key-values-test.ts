//Object.keys와 Object.values 함수 이용하기
//CSV파일을 만들려면 객체의 속성과 값을 분리해야 한다. 
//이때 js에서는 이를 위해 Object.keys와 Object.values 함수를 제공한다.
//이 두 함수를 이용해 각각 개체의 속성 이름과 속성 값으로 구성된 배열을 추출한다

import {IFake, makeFakeData} from '../fake/makeFakeData'

const data: IFake = makeFakeData()
console.log(data)
const keys = Object.keys(data)
console.log('keys: ', keys)
const values = Object.values(data)
console.log('values: ', values)