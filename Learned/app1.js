//catch로 연결된다
const throwError = new Promise((resolve, reject) => {
    throw Error("error");
});
throwError
  .then(()=> console.log("throwError Success"))
  .catch(()=>console.log("throwError catched"));

//아무런 영향이 없다
const ret = new Promise((resolve, reject) => {
    return "returned";
});
ret 
  .then(() => console.log("ret success"))
  .catch(() => console.log("ret catched"));

//resolve 만 된다 ?? 첫번째 함수만 실행?
const several1 = new Promise((resolve, reject) => {
    resolve();
    reject();
});
several1
  .then(() => console.log("several1 success"))
  .catch(()=> console.log("several1 catched"));


//reject만 된다 
const several2 = new Promise((resolve, reject) => {
    reject();
    resolve();
});
several2
  .then(() => console.log("several2 success"))
  .catch(()=> console.log("several2 catched"));

//resolve만 된다
const several3  =new Promise((resolve, reject) => {
    resolve();
    throw new Error("error");
})
several3 
  .then(()=> console.log("several3 success"))
  .catch(()=> console.log("several3 catched"));