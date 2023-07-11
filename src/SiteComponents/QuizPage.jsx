import React from 'react'
import { styled } from '@mui/material'
import { questions } from '../questions.js'
import { ConfigureResults } from './ConfigureResults.js'
import './styles/QuizPage.css'

let incompleteQuestionsString = ''

const QuizBox = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	marginLeft: 'auto',
	marginRight: 'auto',
	width: '40%'
})

const AllQuestions = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	marginLeft: 'auto',
	marginRight: 'auto'
})

const CompleteQuestionBox = styled('div')({})

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

const SubmitQuiz = styled('button')({
	marginTop: '30px',
	width: '100%',
	marginBottom: '50px',
	paddingTop: '20px',
	paddingBottom: '20px',
	fontSize: '20px',
	background: '#0A66C2',
	color: 'white',
	borderRadius: '30px',
	border: '0',
	'&:hover': {
		background: '#3F8CFF'
	}
})

const ErrorMessage = styled('p')({
	color: 'red'
})


export function QuizPage(props) {
	const [incompleteQuestions, setIncompleteQuestions] = React.useState(false)
	const [selectedOption, setSelectedOption] = React.useState(Array(questions.length).fill(0));
	function changeIncompleteQuestions(status) {
		setIncompleteQuestions(status)
	}
	const handleSelectionChange = (index, element) => {
		let tempArr = [...selectedOption]
		if (tempArr[index] !== 0) {
			tempArr[index] = 0
		} else {
			tempArr[index] = element
		}
		setSelectedOption(tempArr)
	}
	let formattedQuestions = FormatQuestions(selectedOption, handleSelectionChange)
	return (
		<QuizBox>
			<AllQuestions>
				{formattedQuestions.map((item, index) => (
					<CompleteQuestionBox key = {index}>{item}</CompleteQuestionBox>
				))}
			</AllQuestions>
			<SubmitQuiz onClick = {() => ClickedSubmit(selectedOption, props.pageStateChange, incompleteQuestions, changeIncompleteQuestions)}>Submit Answers</SubmitQuiz>
			{incompleteQuestions && <ErrorMessage>There are unanswered questions! You can answer them or press submit answers again to set them to neutral and get your cube</ErrorMessage>}
			{incompleteQuestions && <ErrorMessage>The questions that have not been answered are: {incompleteQuestionsString}</ErrorMessage>}
		</QuizBox>
	)
}

function FormatQuestions (selectedOption, handleSelectionChange) {
	let formattedQuestions = []
	for (const q in questions) {
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

function ClickedSubmit(answers, pageStateChange, incompleteQuestions, setIncompleteQuestions) {
	let questionList = []
	for (let answer in answers) {
		if (answers[answer] === 0) {
			questionList.push(answer)
			if (questionList.length === 1) {
				incompleteQuestionsString = String(parseInt(answer) + 1)
			} else {
				incompleteQuestionsString = incompleteQuestionsString + ', ' + String(parseInt(answer) + 1)
			}
		}
	}
	if (questionList.length > 0 && !incompleteQuestions) {
		setIncompleteQuestions(true)
		return
	}
	ConfigureResults(answers)
	pageStateChange('results')
}