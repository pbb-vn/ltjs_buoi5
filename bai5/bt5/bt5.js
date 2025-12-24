let vay;
let nam=1;
let laiSuat;

do {
  vay = prompt("Nhập số tiền vay: (USD)");
  
  if (isNaN(vay)) {
    alert("Không nhập bằng chữ, phải nhập số!");
  }
  else if (vay<100 || vay>1000) {
      alert("Số tiền vay phải từ 100 đến 1000");
  };
} while (isNaN(vay)|| vay<100 || vay>1000);

let soDu = Number(vay);

while (nam<=10) {
  laiSuat = soDu*0.05;
  soDu = soDu + laiSuat;
  console.log("Số dư năm " + nam + ":" + soDu.toFixed(1));
  nam++;

  if (soDu>vay*2) break;
};