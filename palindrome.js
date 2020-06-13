const argv = process.argv
const palindromeLength = argv[2]
// node palindrome.js 5

//make random word to check in palindrome function
const makeWord = (palindromeLength) => {
  let result = ''
  let characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
  let charactersLength = characters.length
  for ( let i = 0; i < palindromeLength; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
  // return '12f21'
  // return 'fgkgf'
}

//checking palindrome
const palindrome = (palindromeLength) => {
  let condition = false
  let result = ''
  while (!condition) {
    let word = makeWord(palindromeLength)
    result = ''
    for (let i = palindromeLength - 1; i >= 0; i--){
      result += word[i]
    }
    if(word == result) condition = true
  }
  if (condition == true) return result
}

console.log(palindrome(palindromeLength))