export function squareRoot(number: number) {
  return Math.sqrt(number)
}

export function square(x: number) {
  return x * x
}

export function diognalLength(x: number, y: number) {
  return squareRoot(square(x) + square(y))
}
