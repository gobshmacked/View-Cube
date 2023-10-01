import React from 'react'
import { styled } from '@mui/material'
import { questions } from '../questions.js'
import { ConfigureResults } from './ConfigureResults.js'
import titlelogo from './assets/titlelogo.png';
import './cssStyles/QuizPage.css'

export function QuizPage(props) {
	const [selectedOption, setSelectedOption] = React.useState(Array(questions.length).fill(0));
	const handleSelectionChange = (index, element) => {
		let tempArr = [...selectedOption]
		if (tempArr[index] === element) {
			tempArr[index] = 0
		} else {
			tempArr[index] = element
		}
		setSelectedOption(tempArr)
	}
	let formattedQuestions = FormatQuestions(selectedOption, handleSelectionChange)
	return (
		<QuizBox>
			<TitleBox>
				<Title1>THE</Title1>
				<Title2Box>
					<Title2>P</Title2>
					<TitleLogo alt = 'main logo' src = {titlelogo}/>
					<Title2>LITICAL ALIGNMENT</Title2>
				</Title2Box>
				<Title3>Test</Title3>
			</TitleBox>
			<WritingBlock>
				<Writing>The political alignment test plots your economic, social and moral values on a 3D cube graph in just 2 - 15 minutes!</Writing>
				<Writing>Select whether you are neutral to the question, if you agree with the question or if you disagree with the question.</Writing>
				<Writing>Think carefully about your answers and try to be truthful. Any unanswered questions will be set to neutral.</Writing>
				<Writing>Once completed, click submit to receive your Political Alignment results!</Writing>
			</WritingBlock>
			<AllQuestions>
				{formattedQuestions.map((questionGroup, questionIndex) => (
					<QuestionTile key = {questionIndex}>
						{questionGroup.map((item, index) => (
							<CompleteQuestionBox key = {index + questionIndex * 17}>{item}</CompleteQuestionBox>
							))}
					</QuestionTile>
				))}
			</AllQuestions>
			<SubmitQuiz onClick = {() => ClickedSubmit(selectedOption, props.pageStateChange)}>Submit Answers</SubmitQuiz>
		</QuizBox>
	)
}

function FormatQuestions (selectedOption, handleSelectionChange) {
	let formattedTiles = []
	let formattedQuestions = []
	for (const q in questions) {
		if ('subheading' in questions[q] && formattedQuestions.length !== 0) {
			formattedTiles.push(formattedQuestions)
			formattedQuestions = []
		}
		formattedQuestions.push(
			<QuestionAnswerBox>
				{'subheading' in questions[q] && <Subheading>{questions[q].subheading + " Questions"}</Subheading>}
				<Question>{questions[q].question + '.'}</Question>
				<Answers>
					<button onClick = {() => handleSelectionChange(q, 'disagree')} className={selectedOption[q] === 'disagree' ? 'selected' : 'normalButton'}>Disagree</button>
					<button onClick = {() => handleSelectionChange(q, 'neutral')} className={selectedOption[q] === 'neutral' ? 'selected' : 'normalButton'}>Neutral</button>
					<button onClick = {() => handleSelectionChange(q, 'agree')} className={selectedOption[q] === 'agree' ? 'selected' : 'normalButton'}>Agree</button>
				</Answers>
			</QuestionAnswerBox>
		)
	}
	formattedTiles.push(formattedQuestions)
	return formattedTiles
}

function ClickedSubmit(answers, pageStateChange) {
	ConfigureResults(answers)
	pageStateChange('results')
}

// Material UI Styles //

const QuizBox = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	marginLeft: 'auto',
	marginRight: 'auto',
	width: '55%',
	'@media (max-width: 600px)': {
		width: '90%'
	}
})

const AllQuestions = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	marginLeft: 'auto',
	marginRight: 'auto',
	paddingBottom: '10px'
})

const QuestionTile = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	marginLeft: 'auto',
	marginRight: 'auto',
	background: '#D1E6FF',
	borderRadius: '20px',
	paddingBottom: '10px',
	marginBottom: '35px'
})

const TitleBox = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	marginLeft: 'auto',
	marginRight: 'auto',
	fontFamily: 'Staatliches',
	margin: '0px',
	rowGap: '0px',
	padding: '0px',
	color: '#22305B'
})

const CompleteQuestionBox = styled('div')({})

const QuestionAnswerBox = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
})

const Question = styled('p')({
	color: '#000000',
	'@media (min-width: 600px)': {
		fontSize: '24px'
	},
	fontFamily: 'Fredoka'
})

const Answers = styled('div')({
	display: 'flex',
	columnGap: '15px',
	justifyContent: 'center',
	marginBottom: '15px'
})

const SubmitQuiz = styled('button')({
	marginTop: '30px',
	width: '100%',
	marginBottom: '50px',
	paddingTop: '20px',
	paddingBottom: '20px',
	fontSize: '20px',
	background: '#22305B',
	color: 'white',
	borderRadius: '30px',
	border: '0',
	'&:hover': {
		background: '#3F8CFF'
	}
})

const Subheading = styled('p')({
	color: '#22305B',
	fontSize: '25px',
	fontFamily: 'Staatliches',
	borderRadius: '60px',
	fontWeight: 'bold',
	paddingTop: '10px',
	paddingBottom: '10px',
	marginBottom: '4px',
	textDecoration: 'underline',
	textUnderlineOffset: '10px',
	'@media (min-width: 600px)': {
		fontSize: '30px'
	}
})

const WritingBlock = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'left',
	alignItems: 'flex-start',
	marginTop: '20px',
	fontFamily: 'Fredoka',
})

const Writing = styled('p')({
	color: '#000000',
	marginLeft: '10%',
	textAlign: 'left',
	fontSize: '18px',
	'@media (min-width: 600px)': {
		fontSize: '24px'
	}
})

const Title1 = styled('p')({
	fontSize: '2.3vw',
	margin: '0px',
	marginTop: '25px',
	'@media (max-width: 800px)': {
		fontSize: '3vw'
	},
	'@media (max-width: 500px)': {
		fontSize: '6vw'
	},
})

const Title2 = styled('p')({
	fontSize: '4vw',
	margin: '0px',
	'@media (max-width: 800px)': {
		fontSize: '5.6vw'
	},
	'@media (max-width: 500px)': {
		fontSize: '9.5vw'
	},
})

const Title3 = styled('p')({
	fontSize: '2.3vw',
	margin: '0px',
	'@media (max-width: 800px)': {
		fontSize: '3vw'
	},
	'@media (max-width: 500px)': {
		fontSize: '6vw'
	},
})

const TitleLogo = styled('img')({
	width: '4vw',
	height: '4.2vw',
	marginTop: '5px',
	'@media (max-width: 800px)': {
		width: '4.76vw',
		height: '5vw',
	},
	'@media (max-width: 500px)': {
		marginTop: '5px',
		width: '6.8vw',
		height: '8.1vw',
	}
})

const Title2Box = styled('div')({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center'
})