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
	let text = ''
	text = `<div class="card-logo">
				<img src="./images/icon-star.svg" alt="icon-star" />
			</div>
			<h2>How did we do?</h2>
			<p>
				How did we do? Please let us know how we did with your support
				request. All feedback is appreciated to help us improve our
				offering!
			</p>
			<div class="card-ratings">
				<button class="ratings-btn" data-id="1">1</button>
				<button class="ratings-btn" data-id="2">2</button>
				<button class="ratings-btn" data-id="3">3</button>
				<button class="ratings-btn" data-id="4">4</button>
				<button class="ratings-btn" data-id="5">5</button>
			</div>
			<button class="card-submit-btn">Submit</button>`
	cardEl.innerHTML = text
}

function resetActiveState() {
	ratingBtns.forEach((btn) => {
		if (btn.classList.contains('active')) {
			btn.classList.remove('active')
		}
	})
}

function setDelay(time, func){
       setTimeout(() => {
             func()
       },time)
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
