// let i = 0;

// function decryptData(callback, wait, age) {
//     let start = new Date().getTime();
//     while(new Date().getTime() < start + wait);
//     callback(`${age}세 은행원`);
// }

// decryptData(console.log, 1000, 20);
// decryptData(console.log, 1000, 37);
// decryptData(console.log, 1000, 59);

//

// function finishJob(num) {
//     console.log(`${num}번 요원의 정보를 받아왔습니다.`);
// }

// setTimeout(finishJob, 2000, 1);
// setTimeout(finishJob, 1500, 2);
// setTimeout(finishJob, 1000, 3);

// console.log("정보 요청을 모두 보냈습니다.");

//

//const promise1 = new Promise((resolve, reject) => {
//    resolve(); //then! 출력
//    reject(); //catch! 출력
//  });
//  promise1
//    .then(() => {
//      console.log("then!");
//    })
//    .catch(() => {
//     console.log("catch!");
//    });

//


function startAsync(age) {
  return new Promise((resolve, reject) => {
    if (age > 20) resolve(`${age} success`);
    else reject(new Error(`${age} is not over 20`));
  });
}

setTimeout(() => {
  const promise1 = startAsync(25);
  promise1
    .then((value) => {
      console.log(value);
    })
    .catch((error) => {
      console.error(error);
    });
  const promise2 = startAsync(15);
  promise2
    .then((value) => {
      console.log(value);
    })
    .catch((error) => {
      console.error(error);
    });
}, 1000);

