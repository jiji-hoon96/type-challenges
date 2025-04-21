type MyExclude<T, U> = T extends U ? never : T

// exclude 는 한 유니온 타입에서 다른 유니온 타입에 할당 가능한 타입을 제외하는 기능 (차집합)
// TypeScript의 유니온 타입에 대한 정규화(normalization) 과정에서 never 타입이 제거됨


// 유사 개념 (Extract vs Exclude)
type Animals = 'cat' | 'dog' | 'bird';
type Pets = 'cat' | 'dog' | 'hamster';

type WildAnimals = Exclude<Animals, Pets>;  // 'bird'
type CommonPets = Extract<Animals, Pets>;   // 'cat' | 'dog'