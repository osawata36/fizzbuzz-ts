import { FizzBuzz  } from './FizzBuzz';

test('1を渡すと文字列1を返す', () => {
  const fizzbuzz = new FizzBuzz()
  expect(fizzbuzz.convert(1).toBe("1"))
});

