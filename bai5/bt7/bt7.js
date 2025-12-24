for (let i=2;i<=100;i++) {
  let soNguyenTo=true;

  for(let a=2;a<i;a++) {
    if (i%a===0) {
      soNguyenTo =false;
      break;
    };
  };

  if (soNguyenTo) console.log(i);
};