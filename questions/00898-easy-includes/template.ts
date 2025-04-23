type IsEqual<X, Y> = 
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;

type Includes<T extends readonly any[], U> = 
  T extends readonly [infer F, ...infer R]
    ? IsEqual<F, U> extends true
      ? true
      : Includes<R, U>
    : false;

// includes 를 구현하기 위해서 동등한지 확인하는 타입인 isEqual 필요해서 구현했다

//  X extends Y & Y extends X ? true : false 을 통해서 구현했는데, 서로 다른 타입인데, 구조적으로 호환되어서 다른 개선사항을 찾아보았다.

type A = {a : string, b : number}

type B = {a : string, b : number, c : boolean}

// type Result1 = A extends B ? true : false => true

// type Result2 = B extends A ? true : false => false

// type Result3 = IsEqual<A, B> => false


// includes 구현을 살펴보면 

// T extends readonly [infer F, ...infer R] => 배열 T 의 첫 번째 요소를 F 로, 나머지 요소들을 R 로 분해
// 조건부로 검사해 F가 U 와 동등한지 확인해 동등하면 true, 아니면 재귀적으로 R 에 대해서 equal 검사를 실행
// 배열이 비어있거나 패턴 매칭 실패하면 false