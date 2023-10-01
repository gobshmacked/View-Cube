import React from 'react'
import { styled } from '@mui/material'
import { QuizPage } from './QuizPage'
import { ResultCube } from './ResultCube'
import { AboutPage } from './AboutPage'
import { ContactPage } from './ContactPage'
import './cssStyles/fonts.css'


export function MainPage(props) {
	return (
		<Page>
			{props.currentPage === 'quiz' && <QuizPage pageStateChange = {props.pageStateChange}/>}
			{props.currentPage === 'results' && <ResultCube pageStateChange = {props.pageStateChange}/>}
			{props.currentPage === 'about' && <AboutPage pageStateChange = {props.pageStateChange}/>}
			{props.currentPage === 'contact' && <ContactPage pageStateChange = {props.pageStateChange}/>}
		</Page>
	)
}

// Material UI Styles //

const Page = styled('div')({
	display: 'flex',
	background: '#DEEFFF',
	height: '100'
})
