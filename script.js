const btn = document.getElementById('submit')
const survey = document.getElementById('survey')
const thanks = document.querySelector('.thanks')
const numbers = document.querySelectorAll('.number')
let score = 0

numbers.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault()
    score = btn.textContent
}))

btn.addEventListener('click', (e) => {
    e.preventDefault()
    document.getElementById('rating').textContent = score
    survey.classList.add('hidden')
    thanks.classList.toggle('hidden')
})