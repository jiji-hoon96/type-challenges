type MyParameters<T extends (...args: any[]) => any> = T extends (
	...args: infer P
) => unknown
	? P
	: never;

// T extends (...args: infer P) => unknown: 조건부 타입. T가 함수라면 그 파라미터들을 infer P로 추론
// P: 추론된 파라미터들의 타입
// never: T가 함수가 아니라면 never 반환

// any 사용하지 않고, unknown 사용할 수 있지만 그렇게하면 제약조건이 깨져서 any 사용
