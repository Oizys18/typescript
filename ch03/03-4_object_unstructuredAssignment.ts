// 객체의 비구조화 할당문

// 대충 쓴 코드 X
let personName = "Jack";
let personAge = "33";

let companyName = "Apple";
let companyAge = "44";

// 구조화된 코드 O
export interface IPerson {
  name: string;
  age: number;
}
export interface ICompany {
  name: string;
  age: number;
}
// 코드 기능확장이 쉽다.
// 이후 IPerson / ICompany import 후 비슷한 유형의 변수를 쉽게 생성한다.
let jack: IPerson = { name: "JJ", age: 33 },
  jane: IPerson = { name: "jane", age: 23 };

//   구조화된 데이터를 사용할 때 데이터 일부만 사용하게 되는 경우가 있다. 이 때 변수자체가 아니라 값만 사용할 때 비구조화를 시행한다.
let {name,age} = jack

console.log(name,age)
// JJ,33



// 사용되는 위치에 따라 다르게 불린다. (...)

// 잔여 연산자 rest operator 
let address: any = {
    country : 'Korea',
    city:'Seoul',
    address1: 'Gangseo',
    address2: 'sinsa',
    address3: 'ABC',
}

const {country,city, ...detail} = address
console.log(detail) // address 1,2,3이 나온다. 


// 전개 연산자 spread operator 
let coord = {...{x:0,z:3},...{y:1}}
console.log(coord)




