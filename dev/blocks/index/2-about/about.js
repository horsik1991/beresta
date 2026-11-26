$( document ).ready (function() {
  const mq = window.matchMedia('(max-width: 600px)');
  const $el = $('.about__link');

  function applyClass(e) {
    $el.toggleClass('btnGreen', e.matches)   // узкий экран → blue, .red снимется автоматически
        .toggleClass('lineBtn', !e.matches); // широкий экран → red, .blue снимется
  }

  mq.addEventListener('change', applyClass);
  applyClass(mq);

// отрабатываем и при загрузке, и при каждом ресайзе через границу
mq.addEventListener('change', handleChange);
handleChange(mq); // начальное состояние
});