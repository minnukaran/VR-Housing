import $ from 'jquery'
import startingScene from 'html!../templates/starting-scene.html'
import helloWorld from 'html!../templates/hello-world.html'

const sceneLoader = (tag) => {
	const sceneElement = $(tag)

	const loadInitialScene = () => sceneElement.html(startingScene)
	const loadHelloScene = () => sceneElement.html(helloWorld)

	return {
		loadInitialScene,
		loadHelloScene
	}
}

export default sceneLoader
