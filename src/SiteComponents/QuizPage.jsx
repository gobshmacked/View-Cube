import React from 'react'
import { styled } from '@mui/material'
import { questions } from '../questions.js'
import { ConfigureResults } from './ConfigureResults.js'
import './styles/QuizPage.css'

const QuizBox = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	marginLeft: 'auto',
	marginRight: 'auto',
	width: '40%',
	'@media (max-width: 600px)': {
		width: '90%'
	}
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
	background: '#0A66C2',
	color: 'white',
	borderRadius: '30px',
	border: '0',
	'&:hover': {
		background: '#3F8CFF'
	}
})

const Subheading = styled('p')({
	color: '#3F8CFF',
	fontSize: '25px',
	borderRadius: '60px',
	fontWeight: 'bold',
	paddingTop: '10px',
	paddingBottom: '10px',
})

const Break = styled('hr')({
	width: '100%'
})

const WritingBlock = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'left',
	alignItems: 'flex-start',
	marginTop: '20px'
})

const InstructionHeading = styled('p')({
	color: '#3F8CFF',
	fontSize: '27px',
	fontWeight: 'bold',
})

const InstructionHeadingTop = styled(InstructionHeading)({
	marginLeft: '10%',
})

const Writing = styled('p')({
	color: 'whitesmoke',
	marginLeft: '10%',
	textAlign: 'left',
	fontSize: '18px'
})

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
			<WritingBlock>
				<InstructionHeadingTop>Instructions</InstructionHeadingTop>
				<Writing>Complete the test and press submit to get your Political Alignment results</Writing>
				<Writing>Each question is a statement. Select whether you mostly agree, disagree or are neutral towards it</Writing>
				<Writing>Any unanswered questions will be set to neutral</Writing>
				<Writing>There are 39 questions and the test should take 2 - 15 minutes</Writing>
			</WritingBlock>
			<AllQuestions>
				{formattedQuestions.map((item, index) => (
					<CompleteQuestionBox key = {index}>{item}</CompleteQuestionBox>
				))}
			</AllQuestions>
			<SubmitQuiz onClick = {() => ClickedSubmit(selectedOption, props.pageStateChange)}>Submit Answers</SubmitQuiz>
		</QuizBox>
	)
}

function FormatQuestions (selectedOption, handleSelectionChange) {
	let formattedQuestions = []
	for (const q in questions) {
		formattedQuestions.push(
			<QuestionAnswerBox>
				{'subheading' in questions[q] && <Subheading>{questions[q].subheading + " Questions"}</Subheading>}
				{'subheading' in questions[q] && <Break/>}
				<Question>{questions[q].question}</Question>
				<Answers>
					<button onClick = {() => handleSelectionChange(q, 'disagree')} className={selectedOption[q] === 'disagree' ? 'selected' : 'normalButton'}>Disagree</button>
					<button onClick = {() => handleSelectionChange(q, 'neutral')} className={selectedOption[q] === 'neutral' ? 'selected' : 'normalButton'}>Neutral</button>
					<button onClick = {() => handleSelectionChange(q, 'agree')} className={selectedOption[q] === 'agree' ? 'selected' : 'normalButton'}>Agree</button>
				</Answers>
				<Break/>
			</QuestionAnswerBox>
		)
	}
	return formattedQuestions
}

function ClickedSubmit(answers, pageStateChange) {
	ConfigureResults(answers)
	pageStateChange('results')
}