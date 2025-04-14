type Push<T extends unknown[], U> = [...T, U]

// unknown[] : 타입이 정해지지 않은 값들의 배열 
// 튜플타입 : 컴파일 시간에 고정된 길이로 처리되지만, 런타임에는 일반 배열처럼 동작

let numbers : number[] = [1, 2, 3]

// numbers.push(4); 컴파일 성공
// numbers.push(false); 컴파일 오류

const readOnlyNumbers : readonly number[] = [1, 2, 3] 

// readOnlyNumbers.push(4); readonly 여서 컴파일 오류

let tuples: [string, number] = ['hello', 42];

// tuples.push(0); 컴파일 성공
// tuples.push('world'); 컴파일 성공
// tuples.push(true); 컴파일 오류

// console.log(tuples.length);
// 튜플 타입은 컴파일 시간에 고정된 길이로 처리되지만, 런타임에는 일반 배열처럼 동작합니다.
// 따라서 튜플 타입은 런타임에서 일반 배열처럼 push 메서드를 사용할 수 있습니다.

type Result1 = Push<[1, 2], 3>; // [1, 2, 3]
type Result2 = Push<string[], boolean>; // [...string[], boolean]
type Result3 = Push<[], "first">; // ["first"]
