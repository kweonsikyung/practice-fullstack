//chance 패키지를 사용해 앞에서 만든 IFake 인터페이스 형태의 데이터를 만든다

import Chance from 'chance'
import { IFake } from './Ifake'

const c = new Chance

export const makeFakeData = ():IFake => ({
    name : c.name(),
    email : c.email(),
    profession : c.profession(),
    birthday : c.birthday(),
    sentence : c.sentence(),
})

export {IFake}