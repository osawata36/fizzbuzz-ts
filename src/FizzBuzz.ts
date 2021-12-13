export class FizzBuzz {

  convert(num: number): string{
    if(num%3===0){
      return "Fizz"
    }
    return String(num)
  }
}
