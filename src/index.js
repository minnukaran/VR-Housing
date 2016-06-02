require('aframe')

import $ from 'jquery'

import movementGenerator from './movement-generator'
import officeMovement from './office-movement'

window.onload = () => {


	const refreshListeners = () => {
		officeMovement()

		$('#marker2')
			.click(() => {
				const helloWorldScene = $('#scene2')[0]
				const initialScene = $('#scene1')[0]
				initialScene.setAttribute('visible', 'false')
				helloWorldScene.setAttribute('visible', 'true')
				$('#first-camera')[0]
					.setAttribute('camera', 'active:false')
				$('#camera')[0]
					.setAttribute('camera', 'active:true')
			})


	}

	// loader.loadInitialScene()

	// scene.onchange = refreshListeners
	setTimeout(refreshListeners, 1)

	movementGenerator('#marker3')

}
