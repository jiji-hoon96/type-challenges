// Promise 체인의 최종 반환 타입을 추론
// type MyAwaited<T> = T extends Promise<infer U> ? MyAwaited<U> : 
// 위 방법처럼 처리할 수 있는데, 그러면 thenable 객체는 대응하지 못한다.

type MyAwaited<T> = T extends Promise<infer U> ? MyAwaited<U> : T extends {then : (onfulfilled : (arg :infer  U, ...args : any)=> any)=> any} ? MyAwaited<U> : T

// T extends Promise<infer U>
// "T가 Promise 타입이라면, 그 Promise가 담고 있는 타입을 추출해서 U라는 변수에 담는다"
// ex) Promise<string> -> U = string


// T extends {then: (onfulfilled: (arg: infer U, ...args: any) => any) => any}:

// "T가 then 메서드를 가지고 있고, 그 메서드의 첫 번째 인자가 콜백 함수이며, 그 콜백 함수의 첫 번째 인자 타입을 U라는 변수에 담는다"라는 의미
// ex) {then: (cb: (value: string) => void) => void}에서 U는 string