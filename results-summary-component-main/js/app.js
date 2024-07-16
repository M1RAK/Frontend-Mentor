const summaryList = document.querySelector('.summary-list')

async function fetchResultData() {
	try {
		const response = await fetch('./data.json')

		if (!response.ok) {
			throw new Error(
				'Network response was not ok ' + response.statusText
			)
		}

		const data = await response.json()
		let resultEl = ''

		data.forEach((result) => {
			const { category, score, icon } = result
			resultEl += `<div class="result-summary ${category.toLowerCase()}">
							<span class="title">
								<img
									src="${icon}"
									alt="icon-${category.toLowerCase()}" />
								<b>${category}</b>
							</span>
							<span class="score"> <b>${score}</b> / 100 </span>
						</div>`
		})

		summaryList.innerHTML = resultEl
	} catch (error) {
		console.error('There was a problem fetching the data:', error)
	}
}

fetchResultData()
