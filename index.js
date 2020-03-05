window.onload = () => {
  let square = document.querySelector('#square')
  let change = document.querySelector('#change')
  
  change.addEventListener('click', function(){
    square.style.backgroundColor = 'aqua'
  })
}
