//Bài tập 1
let Diem = Number(prompt("Nhập điểm: "));
if (Diem >= 5) {
  console.log("Chúc mừng bạn đã đậu");
} else {
  console.log("Rất tiếc bạn đã rớt");
}

//Bài tập 2
let X = Number(prompt("Nhập số nguyên X:"));
if (X % 9 === 0) {
  console.log("Yes");
} else {
  console.log("No");
}

//Bài tập 3

let canhA = Number(prompt("Nhập cạnh A:"));
let canhB = Number(prompt("Nhập cạnh B:"));
let canhC = Number(prompt("Nhập cạnh C:"));
// let tongABC = canhA + canhB + canhC;
if (canhA == canhB && canhA == canhC) {
  console.log("Tam giác cân");
} else console.log("Tam giác không cân");

//Bài tập 4

let KW = Number(prompt("Nhập số KW điện:"));
if (KW < 100) console.log("Tổng tiền phải trả là:", KW * 2000);
else if (KW < 200) console.log("Tổng tiền phải trả là:", KW * 2500);
else console.log("Tổng tiền phải trả là:", KW * 3500);

//Bài tập 5
let KyTu = prompt("Nhập một ký tự:");
if (KyTu) console.log("Số");
else if (KyTu) console.log("Ký tự đặt biệt");
else if (KyTu) console.log("Ký tự chữ Hoa");
else console.log("Ký tự chữ thường");

//Bài tập 6
let a6 = Number(prompt("Nhập số a:"));
let b6 = Number(prompt("Nhập số b:"));
if (-b6 / a6 !== 0) console.log("Nghiệm của phương trình là:", -b6 / a6);
else if (b6 === 0) console.log("Phương trình vố số nghiệm");
else console.log("Phương trình vô nghiệm");

//Bài tập 7
let a7 = Number(prompt("Nhập số a:"));
let b7 = Number(prompt("Nhập số b:"));

//Bài tập 8
let N = Number(prompt("Nhập số nguyên có 2 chữ số:"));

//Bài tập 9
