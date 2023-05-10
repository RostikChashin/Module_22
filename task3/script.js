'use strict'

const button = document.querySelector('.button')
const outputScreen = document.querySelector('.output1')
const outputLocation = document.querySelector('.output2')

button.addEventListener('click', () => {
	getScreenSize()
	getGeoLocation()
})

function getScreenSize() {
	outputScreen.textContent = `Размер вашего экрана: ${window.screen.width} на ${window.screen.height} px`
}

function success(position) {
	const latitude = position.coords.latitude
	const longitude = position.coords.longitude
	outputLocation.textContent = `Ваше местоположение: широта: ${latitude}°, долгота: ${longitude}°`
}

function error() {
	outputLocation.textContent = 'Информация о местоположении недоступна'
}

function getGeoLocation() {
	if (!navigator.geolocation) {
		outputLocation.textContent = 'Информация о местоположении недоступна'
	} else {
		outputLocation.textContent = 'Идёт определение местоположения, подождите...'
		navigator.geolocation.getCurrentPosition(success, error)
	}
}
