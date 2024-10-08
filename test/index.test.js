//TDD (Test Driven Development) 방식으로 테스트 코드 작성하기 -> 애자일에서 강조하는 거, 코드 개발하면 테스트도 하세요~
const factorial = require('../src/index');

// 테스트 그룹 만들기 => describe('테스트 그룹 이름', (인자) => 요런 일 한다)  => 람다함수임
describe('factorial function', () => {
    // 제대로 잘 동작하는지 테스트 케이스
    it('correctly computes factorial of a positive integer number', () => {
        expect(factorial(3)).toEqual(6);
        expect(factorial(5)).toEqual(120);
        expect(factorial(4)).toEqual(24);
    });

    //-1일 때, 오류 발생했는지 검사하는 테스트 케이스
    it('throws an error if a negative input is provided', () => {
        expect(() => { 
            factorial(-1);
        }).toThrow('n must be a positive integer');
    });
});
// 이 전체를 Test Suites라고 하고 이 안에 it() 어쩌구 이게 Tests