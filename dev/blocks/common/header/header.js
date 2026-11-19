// header.js

//Скролл шапки с изменением свойств
export function initHeader() {
  const header = document.querySelector('[data-header]');
  if (!header) return;
  const sentinel = document.createElement('div');
  sentinel.classList.add('sentinel');
  sentinel.style.cssText = 'height: 1px; width: 100%; left: 0; top: -1px;';
  header.parentNode.insertBefore(sentinel, header);
  const observer = new IntersectionObserver(
    ([entry]) => {
      header.classList.toggle('header--isSticky', !entry.isIntersecting);
    },
    {
      rootMargin: '-1px 0px 0px 0px',
      threshold: 0
    }
  );

  observer.observe(sentinel);
}
initHeader();

//Бургер
$( document ).ready(function() {
    $( '.burger' ).on( "click", function() {
		$('.burger__span--1').toggleClass('burger__span--transform1');
		$('.burger__span--2').toggleClass('burger__span--transform2');
		$('.burger__span--3').toggle()
		$('.header-menu').toggle();
		$('.header-menu__list').toggleClass('header-menu__list--mobile')
	});
});

$(window).on('resize', function () {
        if (window.innerWidth > 767) {
            $('.header-menu').css('display', '');
        }
    });