// 객체타입변환 (type assertion)
// 바로 접근해서 타입 변환하는 방법! 
export default interface INameable {
  name: string;
}


let obj:object = {name:'Jack'}
let name1 = (<INameable>obj).name
let name2 = (obj as INameable).name
// console.log(obj.name)은 에러가 난다! 
// 왜? obj는 name 속성을 가지고 있지 않기 때문! 
console.log(name1,name2) 

