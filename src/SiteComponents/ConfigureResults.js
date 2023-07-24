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
	let maxZ = 0
	for (const answer in userInput) {
		maxX = maxX + Math.abs(questions[answer].x)
		maxY = maxY + Math.abs(questions[answer].y)
		maxZ = maxZ + Math.abs(questions[answer].z)
		if (userInput[answer] === 'agree') {
			tempX = tempX + questions[answer].x
			tempY = tempY + questions[answer].y
			tempZ = tempZ + questions[answer].z
		} else if (userInput[answer] === 'disagree') {
			tempX = tempX - questions[answer].x
			tempY = tempY - questions[answer].y
			tempZ = tempZ - questions[answer].z
		}
	}
	tempX = (tempX / maxX) * 10
	tempY = (tempY / maxY) * 10
	tempZ = (tempZ / maxZ) * 10

	finalX = tempX
	finalY = tempY
	finalZ = tempZ
}

