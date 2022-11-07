1. node.js에서 프로그램 명령 줄 인수 읽기
node.js 프로그램을 실행하면서 실행 명령 뒤에 여러 개의 매개변수를 입력할 수 있다.
이처럼 프로그램을 실행할 때 외부에서 입력된 값을 '명령 줄 인수' 라고 한다.
```js
ts-node src/test/processArgs-test.ts data/fake.csv 100000
```

