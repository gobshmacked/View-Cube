import React from 'react'
import { styled } from '@mui/material'
import { QuizPage } from './QuizPage'
import { ResultCube } from './ResultCube'

const Page = styled('div')({
	display: 'flex',
	background: '#32373D',
	height: '100'
})

export function MainPage(props) {
	return (
		<Page>
			{props.currentPage === 'quiz' && <QuizPage pageStateChange = {props.pageStateChange}/>}
			{props.currentPage === 'results' && <ResultCube pageStateChange = {props.pageStateChange}/>}
		</Page>
	)
}