const ball = document.querySelector('.slide_ball')
ball.addEventListener('click', function () {
    ball.classList.toggle('move_ball')
    document.body.classList.toggle('dark_mode')
})