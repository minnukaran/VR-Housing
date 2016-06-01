require('aframe')

import $ from 'jquery'

window.onload = () => {

	$('#marker2')
		.click(() => {
			console.log('marker was clicked')
		})
}
