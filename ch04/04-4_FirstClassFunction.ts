// 일등함수
// 일등함수 기능을 제공하는 언어에서 함수는 함수표현식이라는 일종의 값이다.
// const f = (callback: () => void): void => callback();


// 콜백함수 
export const init = (callback: () => void): void => {
  console.log("1");
  callback();
  console.log("3");
};

// 다른 파일
// import { init } from "./init";
init(() => console.log("2"));


// 실행결과:
// 1
// 2
// 3


// 중첩함수
const calc = (value:number, cb: (number)=>void):void => {
    let add = (a,b)=> a+b
    function multiply(a,b) {return a*b}

    let result = multiply(add(1,2), value)
    
    cb(result)
}
calc(30, (result:number)=> console.log(`result if ${result}`))