export class FizzBuzz {

  convert(num: number): string{
    const canDivideByThree = num % 3 === 0
    const canDivideByFive = num % 5 === 0

    if (canDivideByThree && canDivideByFive) {
      return 'FizzBuzz'
    } else if (canDivideByThree) {
      return 'Fizz'
    } else if (canDivideByFive) {
      return 'Buzz'
    }
    return num.toString()
  }
}
