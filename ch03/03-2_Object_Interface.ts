// object 타입은 인터페이스와 클래스의 상위 타입이다.

// object는 number, boolean, string 타입의 값을 가질 수는 없지만
// 속성 이름이 다른 객체를 모두 자유롭게 담을 수 있다.
let o: object = { name: "Jack", age: 32 };
// o = {first:1, second:2}

// TS는 객체의 타입을 정의할 수 있도록 interface 키워드를 제공한다.

interface Person {
  name: string;
  age: number;
  etc?: boolean;
}

let john: Person = { name: "John", age: 28 };

console.log(john);

// 익명 인터페이스 선언
let ai: {
  name: string;
  age: number;
  etc?: boolean;
} = { name: "Jack", age: 32 };
console.log(ai);

// 보통 함수를 구현할 때 익명 인터페이스를 사용한다.
function printMe(me: { name: string; age: number; etc?: boolean }) {
  console.log(
    me.etc ? `${me.name} ${me.age} ${me.etc}` : `${me.name} ${me.age}`
  );
}
printMe(ai);
