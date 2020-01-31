const driver = new Driver({
  doneBtnText: 'Завершить', // текст на кнопке финиша
  closeBtnText: 'Закрыть', // для закрытия тура
  nextBtnText: 'Далее', // переход к следующему шагу
  prevBtnText: 'Назад' // переход на шаг назад
});
driver.defineSteps([
{
  element: '#stories',
  popover: {
    title: 'Запустите для старта тура',
    description: 'Вы отправитесь в супер путешествие по сайту!',
    position: 'bottom' } },


{
  element: '#whost',
  popover: {
    title: 'Наш единственный заголовок h1 !',
    description: 'Над текстом мы не заморачивались',
    position: 'bottom' } },

{
  element: 'h3',
  popover: {
    title: ' Welcoom Yehia!',
    description: 'Над текстом мы не заморачивались',
    position: 'bottom' } },


{
  element: 'p',
  popover: {
    title: 'Просто параграф',
    description: 'Если написать в HTML фразу lorem10 и нажать tab, то вы увидите чудо',
    position: 'bottom' } },


{
  element: 'img',
  popover: {
    title: 'Котик для лайков!',
    description: 'Мало котиков? Найдите ещё <a href="http://placekitten.com/" target="_blank">сайте</a>',
    position: 'right' } }]);





let btn = document.querySelector('#stories');

btn.addEventListener('click', function () {
  driver.start();
});
document.getElementById("stories").click();
