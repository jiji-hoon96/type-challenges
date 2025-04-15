// TupleToObject 는 문자열 또는 숫자 리터럴로 구성된 튜플(배열)을 받아서 해당 값들을 키로 가지는 객체 타입을 반환
type TupleToObject<T extends readonly PropertyKey[]> = {
  [P in T[number]] : P
}

// PropertyKey 는 string | number | symbol 

const API_ENDPOINTS = ['users', 'posts', 'comments'] as const;
type ApiEndpoints = TupleToObject<typeof API_ENDPOINTS>

function fetchApi<T extends keyof ApiEndpoints>(endpoint: T) :Promise<any> {
  return fetch(`https://api/${endpoint}`).then(res => res.json())
}

// fetchApi('users') 정상적인 사용 방법
// fetchApi('products') 컴파일 오류

const tupleExample = ['a', 'b', 'c'] as const;
type TupleType = typeof tupleExample; // readonly ['a', 'b', 'c'] 타입 추출
type ObjectType = TupleToObject<typeof tupleExample>; // { a: 'a', b: 'b', c: 'c' } 타입 변환


// 질문)  TupleToObject 타입이 T extends readonly PropertyKey[]로 제약을 두는 이유는 무엇이며, 이 제약 조건을 string[] 또는 any[]로 변경하면 어떠한 타입 안전성 문제가 발생할 수 있을까요?

// 1. JavaScript 객체 키의 실제 제약 사항(string, number, symbol만 허용)을 정확히 모델링합니다.
// 2. readonly 제약을 통해 튜플의 불변성을 보장하고 리터럴 타입을 보존합니다.
// 3. TypeScript 타입 시스템과 JavaScript 런타임 동작 간의 일관성을 보장합니다.