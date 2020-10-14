// function 함수이름(매개변수1:타입1, 매개변수2:타입2[, ...]) :반환값 타입 {
//     함수 몸통
// }

function add(a: number, b: number): number {
  return a + b;
}
// 타입 주석 생략할 수 있지만, 변수와는 달리 함수의 매개변수/반환 타입 생략은 바람직하지 않다.
// 함수 구현 의도를 쉽게 읽을 수 있게 만들려는 목적

// 값을 반환하지 않는 함수 : 반환타입이 void
function printMe(name: string, age: number): void {
  console.log(`${name} ${age}`);
}

// 함수 시그니쳐: 함수의 타입
// (매개변수1 타입, 매개변수2 타입[, ...]) => 반환값 타입

let printMe2: (string, number) => void = function (
  name: string,
  age: number
): void {};
// () => void 는 매개변수도 반환값도 없는 함수 시그니처

// type 키워드로 타입 별칭 만들기
// type 키워드는 기존에 존재하는 타입을 단순히 이름만 바꿔서 사용할 수 있도록 해줌 (타입별칭 type alias)
// type 새로운 타입 = 기존 타입

type stringNumberFunc = (string, number) => void;
let f: stringNumberFunc = function (a: string, b: number): void {};
let g: stringNumberFunc = function (c: string, d: number): void {};


// undefined 주의 사항 
