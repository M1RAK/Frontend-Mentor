const ratingBtns = document.querySelectorAll('.ratings-btn')
const submitBtn = document.querySelector('.card-submit-btn')
const cardEl = document.querySelector('.card')

let rating = ''

function renderThankYouPage() {
	let text = ''
	text = `<div class="thank-you">
				<div class="thank-you-logo">
					<img
						src="./images/illustration-thank-you.svg"
						alt="illustration-thank-you" />
				</div>
				<div class="thank-you-desc">
					<div class="rating-score">
						<span>You selected ${rating} out of 5</span>
					</div>
					<h3>Thank you!</h3>
					<p>
						We appreciate you taking the time to give a rating. If
						you ever need more support, don’t hesitate to get in
						touch!
					</p>
				</div>
			</div>`
	cardEl.innerHTML = text
}

function renderActivePage() {
	location.reload()
}

function resetActiveState() {
	ratingBtns.forEach((btn) => {
		if (btn.classList.contains('active')) {
			btn.classList.remove('active')
		}
	})
}

function setDelay(time, func) {
	setTimeout(() => {
		func()
	}, time)
}

submitBtn.addEventListener('click', () => {
	if (rating == '') {
		return
	}

	setDelay(500, renderThankYouPage)
	setDelay(3000, renderActivePage)
})

ratingBtns.forEach((btn, index) => {
	btn.addEventListener('click', (event) => {
		// Resetting & Highlighting the selected rating.
		resetActiveState()
		ratingBtns[index].classList.add('active')

		rating = event.target?.dataset.id
	})
})
