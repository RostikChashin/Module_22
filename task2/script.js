'use strict'

const button = document.querySelector('.button')
const icon1 = document.querySelector('#icon-1')
const icon2 = document.querySelector('#icon-2')

button.addEventListener('click', () => {
	icon1.classList.toggle('invisible')
	icon2.classList.toggle('invisible')
})
