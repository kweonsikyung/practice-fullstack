//csv포맷 파일을 읽는 코드
//csv 파일은 첫 줄에 객체의 속성 이름들이 있고, 두번째 줄부터는 속성값들만 있다
//이를 고려하면 
//객체의 속성명 배열과/ 속성값 배열을 결합해 객체를 만드는 함수가 필요하다
//이러한 기능을 하는 함수는 보통 zip이라는 이름으로 구현한다

export const zip = (keys : string[], values:any[]) => {
    const makeObject = (key:string, value:any) => ({[key] : value})
    const mergeObject = (a : any[]) => a.reduce((sum, val) => ({...sum, ...val}), {})

    let tmp = keys  
        .map((key, index) => [key, values[index]])
        .filter(a => a[0] && a[1])
        .map(a => makeObject(a[0], a[1]))
    return mergeObject(tmp)
}