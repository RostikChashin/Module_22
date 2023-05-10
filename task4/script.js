'use strict'

const button = document.querySelector('.button')
const output = document.querySelector('.output')

button.addEventListener('click', () => {
	getGeoLocation()
})

function fetchRequest(object) {
	if (object.latitude && object.longitude) {
		fetch(
			`https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=${object.latitude}&long=${object.longitude}`
		)
			.then(response => {
				return response.json()
			})
			.then(data => {
				output.textContent = `Ваша временная зона: ${data.timezone}, местные дата и время: ${data.date_time_txt}`
			})
			.catch(error => {
				output.textContent = `ошибка: ${error}`
			})
	} else output.textContent = 'Информация о местоположении недоступна'
}

function success(position) {
	let location = {
		latitude: position.coords.latitude,
		longitude: position.coords.longitude,
	}
	fetchRequest(location)
}

function error() {
	output.textContent = 'Информация о местоположении недоступна'
}

function getGeoLocation() {
	if (!navigator.geolocation) {
		output.textContent = 'Информация о местоположении недоступна'
	} else {
		output.textContent = 'Идёт определение местоположения, подождите...'
		navigator.geolocation.getCurrentPosition(success, error)
	}
}
