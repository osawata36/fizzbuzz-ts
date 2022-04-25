import { FizzBuzz  } from './FizzBuzz';

let fizzbuzz: FizzBuzz

beforeEach(() => {
  fizzbuzz = new FizzBuzz()
})

describe('数値を文字列に変換する', () => {
  test("1を渡すと文字列'1'を返す", () => {
    expect(fizzbuzz.convert(1)).toBe('1')
  })

  test("2を渡すと文字列'2'を返す", () => {
    expect(fizzbuzz.convert(2)).toBe('2')
  })
})

describe("3の倍数を渡すと文字列'Fizz'を返す", () => {
  test("3を渡すと文字列'Fizz'を返す", () => {
    expect(fizzbuzz.convert(3)).toBe('Fizz')
  })
})

describe("5の倍数を渡すと文字列'Buzz'を返す", () => {
  test("5を渡すと文字列'Buzz'を返す", () => {
      expect(fizzbuzz.convert(5)).toBe('Buzz')
    })
})

describe("3と5両方の倍数を渡すと文字列'FizzBuzz'を返す", () => {
  test("5を渡すと文字列'Buzz'を返す", () => {
    expect(fizzbuzz.convert(15)).toBe('FizzBuzz')
  })
})
