import React from 'react'
import { styled } from '@mui/material'
import { questions } from '../questions.js'

const AllQuestions = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	marginLeft: 'calc(22 * 1vw)',
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

const Answer = styled('button')({
	background: '#CCCCCC',
	color: 'black',
	fontWeight: 'bold',
	paddingLeft: '20px',
	paddingRight: '20px',
	paddingTop: '10px',
	paddingBottom: '10px',
	borderRadius: '5px',
	fontSize: '14px',
	border: '0px',
	'&:hover': {
		background: '#0A66C2',
		color: 'white'
	}
})


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
	let formattedQuestions = []
	for (const q of questions) {
		formattedQuestions.push(
			<QuestionAnswerBox>
				<Question>{q.question}</Question>
				<Answers>
					<Answer>Disagree</Answer>
					<Answer>Neutral</Answer>
					<Answer>Agree</Answer>
				</Answers>
			</QuestionAnswerBox>
		)
	}
	return formattedQuestions
}