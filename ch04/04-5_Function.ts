// 함수구현 기법

// 매개변수 기본 값 설정

export type Person = { name: string; age: number };

export const makePerson = (name: string, age: number = 10): Person => {
  const person = { name: name, age: age };
  return person;
};
console.log("Jack"); //name: Jack age:10
console.log("John", 33); // name: John, age:33
// 기본값을 줘서 인자 제공 안됐을 때 값을 설정가능

// 객체 생성 시 값 부분을 생략할 수 있는 타입스크립트 구문

const makePerson2 = (name: string, age: number) => {
  const person = { name, age }; // {name:name, age:age}의 단축표현
};

// 객체를 반환하는 화살표 함수

export const makePerson3 = (name: string, age: number = 10): Person => ({
  name,
  age,
});
// 여기서 화살표 뒤에 ()괄호가 없으면 컴파일러가 중괄호를 객체가 아닌 복합 실행문으로 해석하기 때문에 에러가 발생한다.


// 매개변수에 비구조화 할당문 사용
// 함수의 매개변수도 변수의 일종이라 비구조화 할당문 적용할 수 있다.
export type Person2 = {name:string,age:number}
const printPerson = ({name,age}:Person):void => console.log(`name:${name}, age:${age}`)
printPerson({name:'Jack', age:33})


// 색인 키와 값으로 객체 만들기 
const makeObject =(key,value) => ({[key]:value}) //ESNEXT에서 가능한 코드 
// [key]부분이 ''name'이면 {name:value} 같은 형태, 'firstName'이면 {firstName:value} 처럼 작성된다.
console.log(makeObject('name','Jack')) 
console.log(makeObject('Firstname','John'))


// TS 에서 {[key]:value} 같은 형태를 '색인 가능 타입 indexable type'이라고 부른다. 
// 다음과 같이 타입 명시한다.
type KeyType = {
    [key:string]:string
}


export type KeyValueType = {
    [key:string]:string
}

export const makeObject2 = (key:string, value:string): KeyValueType => ({[key]:value})

console.log(makeObject2('key','value')) // {key:value}

