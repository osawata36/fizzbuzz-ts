import { FizzBuzz  } from './FizzBuzz';

test('1を渡すと文字列1を返す', () => {
  const fizzbuzz = new FizzBuzz()
  expect(fizzbuzz.convert(1)).toBe('1')
})

test('3を渡すと文字列Fizzを返す', () => {
  const fizzbuzz = new FizzBuzz()
  expect(fizzbuzz.convert(3)).toBe('Fizz')
})
