import { questions } from '../questions.js'
import { config } from '../config.js'
export let finalX
export let finalY
export let finalU
export let finalR

const backendURL = process.env.NODE_ENV === 'production' ? config.production.backendURL : config.development.backendURL;

export function ConfigureResults(userInput) {
	CalculateResults(userInput)
}

function CalculateResults(userInput) {
	let tempX = 0
	let tempY = 0
	let tempU = 0
	let tempR = 0
	let maxX = 0
	let maxY = 0
	let maxU = 0
	let maxR = 0
	for (const answer in userInput) {
		maxX = maxX + Math.abs(questions[answer].x)
		maxY = maxY + Math.abs(questions[answer].y)
		maxU = maxU + Math.abs(questions[answer].u)
		maxR = maxR + Math.abs(questions[answer].r)
		if (userInput[answer] === 'agree') {
			tempX = tempX + questions[answer].x
			tempY = tempY + questions[answer].y
			tempU = tempU + questions[answer].u
			tempR = tempR + questions[answer].r
		} else if (userInput[answer] === 'disagree') {
			tempX = tempX - questions[answer].x
			tempY = tempY - questions[answer].y
			tempU = tempU - questions[answer].u
			tempR = tempR - questions[answer].r
		}
	}
	tempX = (tempX / maxX) * 10
	tempY = (tempY / maxY) * 10
	tempU = (tempU / maxU) * 10
	tempR = (tempR / maxR) * 10

	finalX = tempX.toFixed(1)
	finalY = tempY.toFixed(1)
	finalU = tempU.toFixed(1)
	finalR = tempR.toFixed(1)
	// SaveResults(finalX, finalY, finalU, finalR)
}


let SaveResults = (fx, fy, fu, fr) => {
	let link = `${backendURL}/results`
	let finalResults = {
		x: fx,
		y: fy,
		u: fu,
		r: fr,
	}
	finalResults = JSON.stringify(finalResults)
	fetch((link), {
            method: 'post',
            headers: {
                'Content-type': 'application/json',
            },
            body: finalResults
        })
        .catch(error => {
			console.log("error", error)
        }
	);
}

