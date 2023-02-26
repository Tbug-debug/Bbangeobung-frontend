import bongbbangmarker from "../assets/img/bongbbangmarker.png";
const { kakao } = window;

export default function KakaoMapScript(longitude, latitude) {
  const container = document.getElementById("mymap");
  const options = {
    center: new kakao.maps.LatLng(longitude, latitude),
    level: 3,
  };
  const map = new kakao.maps.Map(container, options);
  const imageSrc = bongbbangmarker, // 마커이미지의 주소
    imageSize = new kakao.maps.Size(190, 150), // 마커이미지의 크기
    imageOption = { offset: new kakao.maps.Point(100, 105) }; // 마커이미지의 옵션, 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정

  // 마커의 이미지정보를 가지고 있는 마커이미지를 생성
  const markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    ),
    markerPosition = new kakao.maps.LatLng(longitude, latitude); // 마커가 표시될 위치

  // 마커를 생성
  const marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage, // 마커이미지 설정
  });

  // 마커가 지도 위에 표시되도록 설정
  marker.setMap(map);
}
