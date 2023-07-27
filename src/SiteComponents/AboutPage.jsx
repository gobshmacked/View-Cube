import React from 'react'
import { styled } from '@mui/material'

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
	fontWeight: 'bold'
})

const Writing = styled('p')({
	color: 'whitesmoke',
	marginLeft: '10%',
	textAlign: 'left',
	fontSize: '18px'
})

export function AboutPage() {
	return (
		<WritingBlock>
			<InstructionHeading>What is the Political Alignment Test?</InstructionHeading>
			<Writing>The Political Alignment Test is a series of questions that measure a person's political and philosophical views.</Writing>
			<Writing>The test should only be used as a rough guide of your views as political and philosophical beliefs are too complex to be perfectly captured by a test.</Writing>
			<InstructionHeading>What is being measured by the test?</InstructionHeading>
			<Writing>The Political Alignment Test measures and places you on 3 scales:</Writing>
			<Writing>1. The Left-Right scale</Writing>
			<Writing>2. The Libertarian-Authoritarian scale</Writing>
			<Writing>3. The Utilitarian-Deontology scale</Writing>
			<InstructionHeading>Definitions</InstructionHeading>
		</WritingBlock>
	)
}