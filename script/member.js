$(function(){
    $('.mainSlide').slick();

    function updateVisibility() {
      const tabletWidth = 1023; // 변경: 1023px 이하일 때 보이도록 (조절 가능)
      const mainSlide = document.querySelector('.mainSlide');

      if (window.innerWidth <= tabletWidth) {
        mainSlide.style.display = 'block';
      } else {
        mainSlide.style.display = 'none';
      }
    }

    // 페이지 로드 시 및 창 크기 변경 시 실행
    updateVisibility();

    // 창 크기 변경 이벤트 핸들러 등록
    window.addEventListener("resize", updateVisibility);
  });