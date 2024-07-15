const showBtns = document.querySelectorAll('.show')
const hideBtns = document.querySelectorAll('.hide')
const toggleBtns = document.querySelectorAll('.toggle-btn')
const faqQuestions = document.querySelectorAll('.question')
const faqAnswers = document.querySelectorAll('.answer')

function toggleFaq(index) {
	showBtns[index].classList.toggle('hide')
	hideBtns[index].classList.toggle('hide')
	faqAnswers[index].classList.toggle('answer')
}

toggleBtns.forEach((btn, index) =>
	btn.addEventListener('click', () => {
		toggleFaq(index)
	})
)

faqQuestions.forEach((btn, index) =>
	btn.addEventListener('click', () => {
		toggleFaq(index)
	})
)
