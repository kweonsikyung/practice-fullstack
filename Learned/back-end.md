1. node.js에서 프로그램 명령 줄 인수 읽기
node.js 프로그램을 실행하면서 실행 명령 뒤에 여러 개의 매개변수를 입력할 수 있다.
이처럼 프로그램을 실행할 때 외부에서 입력된 값을 '명령 줄 인수' 라고 한다.
```js
ts-node src/test/processArgs-test.ts data/fake.csv 100000
```

2. 비동기 구현
1)Promise
-Promise 는 비동기 작업의 단위
-기본 사용법 : 우선 Promise 로 관리할 비동기 작업을 만들 때에는, Promise 에서 요구하는 방법대로 만들어야 한다. 
여러가지 방법이 있지만 제일 정석적인 방법은 new Promise(...) 하는 것이다.
```js
const promise1 = new Promise((resolve, reject) => {
  // 비동기 작업
});
```
변수의 이름은 promise1 이며, const 로 선언했기 때문에 재할당이 되지 않는다.
하나의 변수로 끝까지 해당 Promise 를 관리하는 것이 가독성도 좋고 유지보수도 하기 좋다.

new Promise(...) 로 Promise 객체를 새롭게 만들었다. 생성자는 함수이므로 괄호() 를 써서 함수를 호출하는 것과 동일한 모습이다.
생성자는 특별한 함수 하나를 인자로 받는다. (여기서 인자로 들어가는 함수의 형태는 화살표 함수이다.)
이 특별한 함수를 공식 문서에서는 executor 라는 이름으로 부른다. 이 함수에 대해 더 자세히 설명하면 다음과 같다.

executor는 첫번째 인수로 resolve 이며, 두번째 인수로 reject 를 받는다.

resolve 는 executor 내에서 호출할 수 있는 또 다른 함수입니다. resolve 를 호출하게 된다면 “이 비동기 작업이 성공했어!” 라는 뜻입니다.
reject 또한 executor 내에서 호출할 수 있는 또 다른 함수입니다. reject 를 호출하게 된다면 “이 비동기 작업이 실패했어…” 라는 뜻입니다.

Promise 의 특징은 new Promise(...) 하는 순간 여기에 할당된 비동기 작업은 바로 시작됩니다. 비동기 작업의 특징은 작업이 언제 끝날지 모르기 때문에 일단 배를 떠나보낸다고 이야기했습니다. 그럼 그 이후에 이 작업이 성공하거나 실패하는 순간에 우리가 또 뒷처리를 해줘야겠죠? Promise 가 끝나고 난 다음의 동작을 우리가 설정해줄 수 있는데, 그것이 바로 then 메소드와 catch 메소드입니다.

then 메소드는 해당 Promise 가 성공했을 때의 동작을 지정합니다. 인자로 함수를 받습니다.
catch 메소드는 해당 Promise 가 실패했을 때의 동작을 지정합니다. 인자로 함수를 받습니다.

```js
const promise1 = new Promise((resolve, reject) => {
  resolve();
});
promise1
  .then(() => {
    console.log("then!");
  })
  .catch(() => {
    console.log("catch!");
  });
```
======>then!
```js
const promise1 = new Promise((resolve, reject) => {
  reject();
});
promise1
  .then(() => {
    console.log("then!");
  })
  .catch(() => {
    console.log("catch!");
  });
```
======>catch!

