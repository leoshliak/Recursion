function fibs(n){
  let seq = [0, 1];
  if (n < 2) return seq.slice(0, n);
   
  for(let i = 0; i < n - 2; i++){
       seq.push(seq[i] + seq[i+1]);
  }

   return seq;
};

function fibsRec(n){
    let seqR = [0, 1];
    if (n < 2) return seqR.slice(0, n);
    if(n == 2){
       return seqR
    }
    let seq = fibsRec(n - 1);
    seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
    seqR = seq;
    return seqR;
}

console.log(fibs(10));
console.log(fibs(0));

console.log(fibsRec(10));
console.log(fibsRec(0));