import React from 'react'
import { styled } from '@mui/material'

const AboutWrapper = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	width: '50%',
	marginLeft: 'auto',
	marginRight: 'auto'
})

export const WritingBlock = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'left',
	alignItems: 'flex-start',
	marginTop: '20px'
})

export const InstructionHeading = styled('p')({
	color: '#3F8CFF',
	fontSize: '27px',
	fontWeight: 'bold'
})

export const InstructionHeading2 = styled('p')({
	color: 'whitesmoke',
	fontSize: '35px',
	fontWeight: 'bold'
})

export const Writing = styled('p')({
	color: 'whitesmoke',
	marginLeft: '2%',
	textAlign: 'left',
	fontSize: '18px'
})

export const LineSeperator = styled('hr')({
	width: '100%',
})

export function AboutPage() {
	return (
		<AboutWrapper>
			<WritingBlock>
				<InstructionHeading2>About</InstructionHeading2>
				<LineSeperator/>
				<br/><br/>
				<InstructionHeading>What is the Political Alignment Test?</InstructionHeading>
				<Writing>The Political Alignment Test is a series of questions that measure a person's political and philosophical views.</Writing>
				<Writing>The test should only be used as a rough guide of your views as political and philosophical beliefs are too complex to be perfectly captured by a test.</Writing>
				<br/><br/>
				<LineSeperator/>
				<br/>
				<InstructionHeading>What is being measured by the test?</InstructionHeading>
				<Writing>The Political Alignment Test measures and places you on 3 scales:</Writing>
				<Writing>1. The Left-Right scale</Writing>
				<Writing>2. The Libertarian-Authoritarian scale</Writing>
				<Writing>3. The Utilitarian-Deontology scale</Writing>
				<br/><br/>
				<LineSeperator/>
				<br/><br/>
				<InstructionHeading>Definitions</InstructionHeading>
				<Writing>Left: Refers to left wing views characterised by increased levels of government intervention in the economy, often in the form of taxation, government spending or the operation of state owned businesses</Writing>
				<Writing>Right: Refers to right wing views characterised by decreased levels of government intervention in the economy, often in the form of less taxes and limited restrictions on the free market</Writing>
				<Writing>Libertarian: Refers to views characterised by fewer restrictions on individual rights, often in the form of fewer laws</Writing>
				<Writing>Authoritarian: Refers to views characterised by greater restrictions on indiviudal rights, often in the form of more restrictive laws and greater punishment for wrongdoing</Writing>
				<Writing>Utilitarianism: The view that producing the greatest good for the greatest number is the goal, and actions that align with this goal are good and ones that don't are bad</Writing>
				<Writing>Deontology: The view that actions are good if they follow a set of rules and bad if they break these rules</Writing>
				<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
			</WritingBlock>
		</AboutWrapper>
	)
}