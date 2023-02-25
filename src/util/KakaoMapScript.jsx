import bongbbangmarker from '../assets/img/bongbbangmarker.png';
const { kakao } = window;

export default function KakaoMapScript(longitude, latitude) {
  const container = document.getElementById('mymap');
  const options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3,
  };
  const map = new kakao.maps.Map(container, options);
  const imageSrc = bongbbangmarker, // 마커이미지의 주소입니다
    imageSize = new kakao.maps.Size(190, 150), // 마커이미지의 크기입니다
    imageOption = { offset: new kakao.maps.Point(100, 105) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

  // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
  const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(33.450701, 126.570667); // 마커가 표시될 위치입니다

  // 마커를 생성합니다
  const marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage, // 마커이미지 설정
  });

  // 마커가 지도 위에 표시되도록 설정합니다
  marker.setMap(map);
}
