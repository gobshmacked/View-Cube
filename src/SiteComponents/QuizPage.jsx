import React from 'react'
import { styled } from '@mui/material'
import { questions } from '../questions.js'
import './styles/QuizPage.css'

const AllQuestions = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	marginLeft: 'auto',
	marginRight: 'auto'
})

const CompleteQuestionBox = styled('div')({

})

const QuestionAnswerBox = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center'
})

const Question = styled('p')({
	color: 'whitesmoke',
	fontWeight: 'bold',

})

const Answers = styled('div')({
	display: 'flex',
	columnGap: '15px',
	justifyContent: 'center'
})

// const Answer = styled('button')({
// 	background: '#CCCCCC',
// 	color: 'black',
// 	fontWeight: 'bold',
// 	paddingLeft: '20px',
// 	paddingRight: '20px',
// 	paddingTop: '10px',
// 	paddingBottom: '10px',
// 	borderRadius: '5px',
// 	fontSize: '14px',
// 	border: '0px',
// 	'&:hover': {
// 		background: '#0A66C2',
// 		color: 'white'
// 	}
// })


export function QuizPage() {
	let questions = FormatQuestions()
	return (
		<AllQuestions>
			{questions.map((item, index) => (
				<CompleteQuestionBox key = {index}>{item}</CompleteQuestionBox>
			))}
		</AllQuestions>
	)
}

function FormatQuestions () {
	const [selectedOption, setSelectedOption] = React.useState(Array(questions.length).fill(0));
	const handleSelectionChange = (index, element) => {
		let tempArr = [...selectedOption]
		tempArr[index] = element
		setSelectedOption(tempArr)
	}
	let formattedQuestions = []
	for (const q in questions) {
		selectedOption.push('')
		formattedQuestions.push(
			<QuestionAnswerBox>
				<Question>{questions[q].question}</Question>
				<Answers>
					<button onClick = {() => handleSelectionChange(q, 'disagree')} className={selectedOption[q] === 'disagree' ? 'selected' : 'normalButton'}>Disagree</button>
					<button onClick = {() => handleSelectionChange(q, 'neutral')} className={selectedOption[q] === 'neutral' ? 'selected' : 'normalButton'}>Neutral</button>
					<button onClick = {() => handleSelectionChange(q, 'agree')} className={selectedOption[q] === 'agree' ? 'selected' : 'normalButton'}>Agree</button>
				</Answers>
			</QuestionAnswerBox>
		)
	}
	return formattedQuestions
}