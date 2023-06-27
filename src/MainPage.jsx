import React from 'react'
import { styled } from '@mui/material'
import { QuizPage } from './QuizPage'

const Page = styled('div')({
	display: 'flex',
	flexGrow: '5'
})

export function MainPage(props) {
	return (
		<Page>
			{props.currentPage === 'quiz' && <QuizPage/>}
		</Page>
	)
}