"use strict"

//загрузка контента
window.onload = function () {
  const parallax = document.querySelector('.parallax');

  if(parallax){
    const content = document.querySelector('.parallax-container') 
    const clouds = document.querySelector('.parallax-container-clouds')
    const mountains = document.querySelector('.parallax-container-mountains')
    const human = document.querySelector('.parallax-container-human')

    //Коэффициенты
    const forClouds = 40;
    const forMountains = 20;
    const forHuman = 10;

    ///Скорость анимации
    const speed = 0.09

    //Объявление переменных(начальные значения переменных)
    let positionX = 0;
    let positionY = 0;
    let coordXprocent = 0;
    let coordYprocent = 0;

    function setParallaxMousePosition(){
      const distX = coordXprocent - positionX
      const distY = coordYprocent - positionY

      positionX = positionX + (distX * speed)
      positionY = positionY + (distY * speed)


      //приписываем стили к переменным
      clouds.style.cssText = `transform: translate(${positionX / forClouds}%, ${positionY / forClouds}%)`
      mountains.style.cssText = `transform: translate(${positionX / forMountains}%, ${positionY / forMountains}%)`
      human.style.cssText = `transform: translate(${positionX / forHuman}%, ${positionY / forHuman}%)`



      requestAnimationFrame(setParallaxMousePosition)

    }
    setParallaxMousePosition()

    parallax.addEventListener('mousemove', event => {
      //Получение ширины и высоты блока
      const parallaxWidth = parallax.offsetWidth
      const parallaxHeight = parallax.offsetHeight



      //Ноль по середине
      const coordX = event.pageX - parallaxWidth / 2
      const coordY = event.pageY - parallaxHeight / 2


      //Получение процентов
      coordXprocent = coordX / parallaxWidth * 100
      coordYprocent = coordY / parallaxHeight * 100

      console.log(parallax.offsetWidth * 100)
    })



  }

}