import React from 'react'
import { questions } from '../questions.js'
export let finalX
export let finalY
export let finalZ

export function ConfigureResults(userInput) {
	CalculateResults(userInput)
}

function CalculateResults(userInput) {
	let tempX = 0
	let tempY = 0
	let tempZ = 0
	let maxX = 0
	let maxY = 0
	console.log(userInput)
	for (const answer in userInput) {
		maxX = maxX + questions[answer].x
		maxY = maxY + questions[answer].y
		if (userInput[answer] === 'agree') {
			tempX = tempX + questions[answer].x
			tempY = tempY + questions[answer].y
		} else if (userInput[answer] === 'disagree') {
			tempX = tempX - questions[answer].x
			tempY = tempY - questions[answer].y
		}
		console.log(maxX, maxY)
	}
	console.log(maxX, maxY)
	tempX = (tempX / maxX) * 10
	tempY = (tempY / maxY) * 10
	tempZ = (tempX + tempY) / 2

	finalX = tempX
	finalY = tempY
	finalZ = tempZ
	console.log(finalX, finalY, finalZ)
}

