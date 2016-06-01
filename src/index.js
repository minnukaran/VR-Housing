require('aframe')


let i = 0

setInterval(() => {
	const scene = document.getElementById('my-scene')

	const box = document.createElement('a-box')
	box.setAttribute('position', '-1 0.5 ' + i)
	box.setAttribute('width', '1')
	box.setAttribute('height', '1')
	box.setAttribute('depth', '1')
	box.setAttribute('color', 'tomato')
	i += 1
	scene.appendChild(box)
}, 2000)
