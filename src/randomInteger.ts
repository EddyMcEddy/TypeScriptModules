function randomInteger(min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min)) + min
}

// Export allows the code above to be used throughout our program
export default randomInteger
