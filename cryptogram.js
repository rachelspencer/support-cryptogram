let cryptogram = "AJCJC LZPD-LDYFDZIIPQF ZEWPBYD ICCUPQFB ICBBZFC PQBUDJKUYD YD ICQUYD"
const cryptogramSplit = cryptogram.split("");
//console.log(cryptogramSplit)

for (let letter = 0; letter < cryptogramSplit.length; letter++) {
  // hint : 1
  if (cryptogramSplit[letter] === 'A') {
    cryptogramSplit[letter] = 'Q'
    continue
  // hint : 2
  } if (cryptogramSplit[letter] === 'C') {
     cryptogramSplit[letter] = 'E'
    continue
  // hint : 3
 } if (cryptogramSplit[letter] === 'I') {
     cryptogramSplit[letter] = 'M'
    continue
  // hint : 4
 } if (cryptogramSplit[letter] === 'L') {
     cryptogramSplit[letter] = 'P'
    continue
  // hint : 5
 } if (cryptogramSplit[letter] === 'Q') {
     cryptogramSplit[letter] = 'N'
    continue
  // hint : 6
 } if (cryptogramSplit[letter] === 'Y') {
     cryptogramSplit[letter] = 'O'
    continue
  // rest of alphabet
  } if (cryptogramSplit[letter] === 'Z') {
     cryptogramSplit[letter] = 'A'
    continue
  // no b in msg
  } if (cryptogramSplit[letter] === 'K') {
     cryptogramSplit[letter] = 'C'
    continue
  } if (cryptogramSplit[letter] === 'E') {
     cryptogramSplit[letter] = 'D'
    continue
  // no f in msg
  } if (cryptogramSplit[letter] === 'F') {
     cryptogramSplit[letter] = 'G'
  continue 
  // no h in msg
  } if (cryptogramSplit[letter] === 'P') {
     cryptogramSplit[letter] = 'I'
    continue 
  // no j,k,l in msg
  } if (cryptogramSplit[letter] === 'D') {
     cryptogramSplit[letter] = 'R'
    continue
  } if (cryptogramSplit[letter] === 'B') {
     cryptogramSplit[letter] = 'S'
    continue
  } if (cryptogramSplit[letter] === 'U') {
     cryptogramSplit[letter] = 'T'
    continue
  } if (cryptogramSplit[letter] === 'J') {
     cryptogramSplit[letter] = 'U'
    continue
 }  if (cryptogramSplit[letter] === 'W') {
     cryptogramSplit[letter] = 'V'
    continue
  //no w,x,y,z in msg
 }
}
console.log(cryptogramSplit.join(''))

