let doiTuongPhieuBau = [{ungCuVien: 'A', soPhieu:50},{ungCuVien: 'B', soPhieu:30},{ungCuVien: 'C', soPhieu:60}];
let tongPhieu=0;

for (let a of doiTuongPhieuBau) {
  tongPhieu = tongPhieu + a.soPhieu;
};
console.log("Tổng phiếu bầu: " + tongPhieu);

for (let thuocTinh in doiTuongPhieuBau) {
  console.log("Ứng cử viên " + doiTuongPhieuBau[thuocTinh].ungCuVien + " có " + doiTuongPhieuBau[thuocTinh].soPhieu + " phiếu bầu");
};