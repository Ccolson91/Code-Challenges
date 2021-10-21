// Write your code below

function palindrome(str){
  const wordCheck = str.length
  for(let i = 0; i < 1 / 2; i++){
    if(str.charAt(i) !== str.charAt(wordCheck - 1 - i)){
    
      return false
    }
  }
  return true
}
if(palindrome('hannah')){
  console.log(true)
} else {
  console.log(false)
}