// Check if two arrays are equal or not
let N = 5;
const A = [1, 2, 5, 4, 0];
const B = [2, 4, 5, 0, 1];
let A1 = A.length;
let B1 = B.length;
if (A1 != B1) {
  return false;
}
A.sort();
B.sort();

for (let i = 0; i < N; i++) {
  if (A[i] !== B[i]) {
    console.log(false);
  }
}
console.log(true);
