const hello = (a:number, b:number):number => {
    return a+b
}
// const hello = (a:number, b:number):number => a+b
// 중괄호 생략해도 된다. 


// 단, ts작동방식이 달라진다. 
//  중괄호가 있으면   -> 실행문 (execution statement)
//  중괄호가 없으면   -> 표현식 문 ( expression statement)

console.log(hello(3,5))