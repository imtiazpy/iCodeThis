let show_pass = false;

const eye = document.querySelector('.fa-regular');
const password_input = document.querySelector('#password');
const lock = document.querySelector('.lock');

eye.addEventListener('click', () => {
    if (!show_pass) {
        eye.classList.remove('fa-eye')
        eye.classList.add('fa-eye-slash')
        lock.classList.remove('fa-lock')
        lock.classList.add('fa-lock-open')
        password_input.type = 'text'
        show_pass = !show_pass
    } else {
        eye.classList.remove('fa-eye-slash')
        eye.classList.add('fa-eye')
        lock.classList.remove('fa-lock-open')
        lock.classList.add('fa-lock')
        password_input.type = 'password'
        show_pass = !show_pass
    }
})