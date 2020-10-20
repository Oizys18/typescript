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
// 이런 식으로 함수의 타입 (함수 시그니처)를 명시하면 매개변수의 개수나 타입, 반환타입이 다른 함수를 선언하는 잘못을 미연에 방지할 수 있다.

// undefined 주의 사항

// undefined 고려안하고 작성할 경우
interface INameable {
  name: string;
}

function getName(o: INameable) {
  return o.name;
} //getName은 INameable 타입의 매개변수를 요구한다.

let n = getName(undefined); //undefined로 호출해도 구문오류가 발생하지 않는다.
// undefined는 최하위 타입이므로 INameable을 상속하는 자식 타입으로 간주된다.
console.log(n);

// 하지만 실행해보면 o.name이 undefined.name이 되어 "cannot read name of 'undefined"에러가 발생한다.
// 이런 오류를 방지하기 위해 매개변수가 undefined인지 판별하는 코드를 작성해야 한다.
//>>>>>>>>>>>>>

interface INameable2 {
  name: string;
}

function getName2(o: INameable2) {
  return o != undefined ? o.name : "unknown name";
}
let n2 = getName(undefined); // unknown name
let n3 = getName({ name: "Jack" }); // Jack

// 만약 선택 속성 인터페이스라면,

function getName3(o: INameable2) {
  return o != undefined && o.name ? o.name : "unknown name"; //값이 있는지 ? 
}


// 선택적 매개변수
// 인터페이스 선택 속성처럼 함수의 매개변수에도 물음표 붙여서 선택적 매개변수를 만들 수 있다.

function fn(arg1:string, arg?:number):void{}
// 선택적 매개변수가 있는 함수의 시그니처는 타입 뒤에 물음표를 붙인다. 

type OptionalArgFunc = (string,number?)=> void


