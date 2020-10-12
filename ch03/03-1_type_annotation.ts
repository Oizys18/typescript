// let과 const
// let 변수이름: 타입 = 초깃값
let b: boolean = true;
// const 변수이름: 타입 = 초깃값
const var2: number = 1;

// any 타입
let a: any = 0;
a = "hello";
a = true;
a = {};
console.log(a);

// undefined 타입 
// ts의 undefined는 타입이기도 하고 값이기도하다. 
let u : undefined = undefined 
// undefined 타입으로 설정되면 undefined 값만 가질 수 있다. 

// any 는 모든 타입의 루트타입, 즉 최상위 타입 
// undefined는 모든 타입의 최하위 타입 


// 템플릿 문자열 
let count = 10, message = 'Your count'
let result = `${message} is ${count}`
console.log(result)















