const statsList = document.querySelector('.stats-list')

async function fetchResultData() {
	try {
		const response = await fetch('./data.json')

		if (!response.ok) {
			throw new Error(
				'Network response was not ok ' + response.statusText
			)
		}

		const data = await response.json()
		let statEl = ''

		data.forEach((stat) => {
			const { category, score, icon } = stat
			statEl += `<div class="stat-wrapper ${category.toLowerCase()}">
							<span class="stat-title">
								<img
									src="${icon}"
									alt="icon-${category.toLowerCase()}" />
								<b>${category}</b>
							</span>
							<span class="stat-score"> <b>${score}</b> / 100 </span>
						</div>`
		})

		statsList.innerHTML = statEl
	} catch (error) {
		console.error('There was a problem fetching the data:', error)
	}
}

fetchResultData()
