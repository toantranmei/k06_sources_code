let bienChayKhiNaoHetGio = 3000;

const tongThoiGianMaChungTaMuonQuaBongDiChuyenTuDauDenDau = 3000; // timeDuration / stepTime = 30

const diemBatdauQuaBongDiChuyen = 0; // px
const diemKetThucQuaBongDiChuyen = 500; // 500 - 0 = 500 / 30 = 50/3

const thoiGianMoiLanMuonDiChuyenQuaBong = 100;

let testPos = 0;

const circleNode = document.querySelector(".circle");
const btnClick = document.getElementById("clickMe");

btnClick.onclick = function () {
  const runner = setInterval(function () {
    let giaTriTopTruocDoCuaCircle = circleNode.style.top.replace("px", ""); // number

    const soPixcelMoiLanDiChuyenSauThoiGianCuaInterval =
      (diemKetThucQuaBongDiChuyen - diemBatdauQuaBongDiChuyen) /
      (tongThoiGianMaChungTaMuonQuaBongDiChuyenTuDauDenDau /
        thoiGianMoiLanMuonDiChuyenQuaBong);

    circleNode.style.top = `${
      Number(giaTriTopTruocDoCuaCircle) +
      soPixcelMoiLanDiChuyenSauThoiGianCuaInterval
    }px`;

    bienChayKhiNaoHetGio -= thoiGianMoiLanMuonDiChuyenQuaBong;

    if (bienChayKhiNaoHetGio < thoiGianMoiLanMuonDiChuyenQuaBong) {
      clearInterval(runner);
      return false;
    }
  }, thoiGianMoiLanMuonDiChuyenQuaBong);
};
