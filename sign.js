const container = document.getElementById('container');
const overlayCon = document.getElementById('overlayCon');
const overlayBtn = document.getElementById('overlayBtn');
const input = document.querySelector('#pass')
const eyeOpen = document.querySelector('.eyeOpen')
const eyeClose = document.querySelector('.eyeClose')
overlayBtn.addEventListener('click', ()=>{
   container.classList.toggle('right-panel-active');
   overlayBtn.classList.remove('btnScaled');
   window.requestAnimationFrame(()=> {
   overlayBtn.classList.add('btnScaled');
   })
});
eyeOpen.addEventListener('click', function() {
   eyeOpen.classList.add('hiden')
   eyeClose.classList.remove('hiden')
   input.setAttribute('type', 'password')
})
eyeClose.addEventListener('click', function() {
eyeClose.classList.add('hiden')
eyeOpen.classList.remove('hiden')
input.setAttribute('type', 'text')
})