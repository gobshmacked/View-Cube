import React from 'react'
import { styled } from '@mui/material'
import {WritingBlock, InstructionHeading, InstructionHeading2, Writing} from './AboutPage'

const ContactWrapper = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	width: '50%',
	marginLeft: 'auto',
	marginRight: 'auto',
})

export function ContactPage() {
	return (
		<ContactWrapper>
			<WritingBlock>
				<InstructionHeading2>Contact</InstructionHeading2>
				<Writing>If you want to leave feedback or report bugs feel free to send an email to:</Writing>
				<Writing>politicalcompasstest@gmail.com</Writing>
				<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
			</WritingBlock>
		</ContactWrapper>
	)
}