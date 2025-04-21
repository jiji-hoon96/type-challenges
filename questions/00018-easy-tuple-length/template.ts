type Length<T extends readonly any[]> = T['length'];

// as const 로 선언된 튜플을 사용할 수 있으니 readonly 조건이 있어야함