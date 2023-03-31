const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('#list-comment .item')
var translateY = 0
var count = commentItem.length
window.addEventListener('scroll', function() {
    const header = this.document.querySelector('#header')
    header.classList.toggle('sticky', this.window.scrollY > 0)
})
next.addEventListener('click', function (event) {
    event.preventDefault()
    if (count == 1) {
    return false
}
    translateY += -400
    comment.style.transform = `translateY(${translateY}px)`
    count--
})

prev.addEventListener('click', function (event) {
    event.preventDefault()
    if (count == 3) {
    return false
}
    translateY += 400
    comment.style.transform = `translateY(${translateY}px)`
    count++
})
// sign
