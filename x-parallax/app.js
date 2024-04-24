console.log(document.querySelectorAll('.layer'))
document.addEventListener('mousemove', parallax)

function parallax(event){
  document.querySelectorAll('.layer').forEach(layer => {
    let speed = layer.getAttribute('data-type')
    layer.style.transform = `translateX(${event.clientX * speed / 1000}px)`
  })

}