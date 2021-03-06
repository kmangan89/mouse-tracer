
/**
 * Takes DOM coords and a canvas, and returns those coords as local canvas coords.
 * If that sentence doesn't make sense, just think of this as a way to draw the mouse
 * on the canvas using the window's mouse coords.
 * @param {*} canvasElement the DOM node for the canvas element you want coords for
 * @param {*} inputCoords an object formatted as `{x, y}` with DOM coordinates
 */
function domToCanvasCoords(canvasElement, inputCoords) {
	const canvasRect = canvasElement.getBoundingClientRect();

	return {
		x: inputCoords.x - canvasRect.left,
		y: inputCoords.y - canvasRect.top,
	}
}

/**
 * Returns a random number somewhere betweeen the min and max
 * @param {Number} min 
 * @param {Number} max 
 */
function randomRange (min, max) {

	const range = max - min;
	const rand = Math.random() * range;
	return min + rand;
}


function randomElementFromArray(array) {
	const random = Math.random() * array.length;
	return array[Math.floor(random)];
}


function lerp (start, end, progress) {
	let range = end - start;
	return start + (range * progress);
}

export {domToCanvasCoords, randomRange, randomElementFromArray, lerp}