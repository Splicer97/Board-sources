const board = document.querySelector('#board')
const SQUARE_NUMBER = 1000
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71", "#20B2AA", "#00FF00", "#FFE4E1", "#808000"]

for (let i = 0; i < SQUARE_NUMBER; i++) {
		const square = document.createElement('div')
		square.classList.add("square")

		square.addEventListener("mouseover",
		setColor)
		square.addEventListener("mouseleave", removeColor)

		board.append(square)
}
function setColor(event) {
	const element = event.target
	const color = getRandomColor()
	element.style.backgroundColor = color
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(event) {
	const element = event.target
	element.style.backgroundColor = "#1d1d1d"
	element.style.boxShadow = `0 0 2px #000`
}
function getRandomColor() {
return colors[Math.floor(Math.random() * colors.length )]
}
