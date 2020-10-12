// class, private, public, protected, extend 키워드 제공

class Person1 {
  name: string;
  age?: number;
}

let jack1: Person1 = new Person1();
console.log(jack1);
jack1.name = "Jack";
jack1.age = 32;
console.log(jack1);

// 접근 제한자
// public, private, protect 사용 가능 (default==public)

// 생성자
class Person2 {
  constructor(public name: string, public age?: number) {}
}

let jack2: Person2 = new Person2("Jack2", 50);
console.log(jack2);

class Person3 {
  name: string;
  age?: number;
  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }
}

let jack3: Person3 = new Person3("Jack", 60);
console.log(jack3);

// 인터페이스 구현
// 타입스크립트 클래스는 인터페이스를 구현할 수 있다. implements 키워드를 사용한다.
// react+ts 에서 자주 보던 구조..

// interface IPerson4 {
//     name:string;
//     age?: number
// }

// class Person4 implements IPerson4{
//     name:string;
//     age:number
// }

interface IPerson4 {
  name: string;
  age?: number;
}

class Person4 implements IPerson4 {
  constructor(public name: string, public age?: number) {}
}

// 추상 클래스
// abstract 키워드를 통해 추상 클래스를 만들 수 있다.
// 추상 클래스는 자신의 속성/메소드 앞에 abstract를 붙여서 자신을 상속하는 다른 클래스에서 이 속성이나 메소드를 구현하게 한다. 
abstract class AbstractPerson5{
    abstract name:string;
    constructor(public age?:number){}
}


// 상속 클래스 

class Person5 extends AbstractPerson5{
    constructor(public name:string, age?:number){
        super()
    }
}
let jack5: Person5 = new Person5('hh',32)
console.log(jack5)




// 정적 클래스 

class A {
    static initValue:number = 1
}

let initVal = A.initValue 

console.log(initVal)














