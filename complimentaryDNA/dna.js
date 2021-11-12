//a & t compliment each other
//c & g compliment each other


let dnaStrand = (str) => {
  let strand = str.split('')
  for(let i = 0; i < strand.length; i++)
  if(strand[i] === 'A'){
    strand[i] = 'T'
  } else if(strand[i] === 'T'){
    strand[i] = 'A'
  } else if(strand[i] === 'G'){
    strand[i] = 'C'
  } else if(strand[i] === 'C'){
    strand[i] = 'G'
  } else {
    return 'invalid input'
  }
  return strand
}

let dna1 = dnaStrand('ATTGC')
let dna2 = dnaStrand('GTAT')

console.log(dna2)