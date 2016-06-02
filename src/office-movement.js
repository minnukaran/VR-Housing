import $ from 'jquery'

module.exports = () => {
	let camera = $('#camera')
	window.camera = camera
	let arrow = $('#arrow')
	let flag = true
	let keyflag = true
	let keyCode = 'W'.charCodeAt(0)

	// const setFlags = () => {
	// 	flag = !flag
	// 	keyflag = !keyflag
	// 	window.requestAnimationFrame(setFlags)
	// }
	// window.requestAnimationFrame(setFlags)

	setInterval(() => {
		flag = !flag
	}, 15)
	setInterval(() => {
		keyflag = !keyflag
	}, 100)

	camera[0].addEventListener('componentchanged', function (evt) {
		if (!flag) {
			if (evt.detail.name === 'position') {
				let {
					x,
					y,
					z
				} = evt.detail.newData
				arrow.attr('position', x + ' ' + 0 + ' ' + z)
			}
			if (arrow[0].is('hovered') && keyflag) {
				camera[0].components['wasd-controls'].keys[keyCode] = true
			} else {
				camera[0].components['wasd-controls'].keys[keyCode] = false
			}
		}
	})
}
