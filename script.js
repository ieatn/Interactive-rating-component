const mobile = document.querySelector('.mobile')
const input = document.querySelector('.input')
const container = document.querySelector('.container')
const submitBtn = document.querySelector('.submit')
const buttons = document.querySelectorAll('.flex button');
let activeBtn = null;
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    if (activeBtn) {
        activeBtn.classList.remove('active');
        activeBtn.style.backgroundColor = '';
    }
    btn.classList.add('active')
    activeBtn = btn;
    // when active button pressed, set input text to that number
    input.textContent = `You selected ${btn.textContent} out of 5`
  });
});

submitBtn.addEventListener('click', () => {
    container.style.display = 'none';
    mobile.classList.add('active')
})