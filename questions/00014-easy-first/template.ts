type First<T extends any[]> = T extends [infer F, ...infer Rest] ? F : never

type Arr1 = [string, number, boolean];
type Arr2 = [];
type Arr3 = string[];

type First1 = First<Arr1>; // string
type First2 = First<Arr2>; // never
type First3 = First<Arr3>; // never

// infer는 TypeScript의 조건부 타입(conditional types) 내에서 사용되는 키워드로 타입 추론을 가능하게한다.

// ...infer Rest는 배열의 나머지 요소를 추론하는 타입이다.
// 배열에 여러 요소가 있는 경우를 처리하기 위해 ...infer Rest 패턴이 필요하다. 이 패턴이 없으면 [number, string, boolean]과 같은 다중 요소 배열에서 첫 번째 요소의 타입을 추출할 수 없게 된다.