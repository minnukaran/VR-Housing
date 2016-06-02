import $ from 'jquery'

module.exports = tag => {
	const selectedBox = $('#marker3')[0]
	const movementGenerator = attribute => (dimension, direction) => () => {
		const currentPosition = selectedBox.getAttribute(attribute)
		currentPosition[dimension] += direction
		selectedBox.setAttribute(attribute, currentPosition)
	}
	const positionMovement = movementGenerator('position')
	const rotationMovement = movementGenerator('rotation')
	$('#xplus')
		.click(positionMovement('x', 0.2))
	$('#xminus')
		.click(positionMovement('x', -0.2))
	$('#yplus')
		.click(positionMovement('y', 0.2))
	$('#yminus')
		.click(positionMovement('y', -0.2))
	$('#zplus')
		.click(positionMovement('z', 0.2))
	$('#zminus')
		.click(positionMovement('z', -0.2))
	$('#r1plus')
		.click(rotationMovement('x', 5))
	$('#r1minus')
		.click(rotationMovement('x', -5))
	$('#r2plus')
		.click(rotationMovement('y', 5))
	$('#r2minus')
		.click(rotationMovement('y', -5))
	$('#r3plus')
		.click(rotationMovement('z', 5))
	$('#r3minus')
		.click(rotationMovement('z', -5))
}
