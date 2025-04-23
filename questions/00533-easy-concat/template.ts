type Concat<T extends readonly any[], U extends readonly any[]> = [...T, ...U]

// concat 은 두 배열을 합쳐서 하나의 배열로 만드는 함수

// readonly 를 넣어줘야 as const 어서션으로 생성된 읽기 전용 튜플에도 호환할 수 있다.
