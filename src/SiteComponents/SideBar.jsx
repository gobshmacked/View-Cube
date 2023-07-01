import React from 'react'
import { styled } from '@mui/material'

const SideBarDiv = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	background: '#0A66C2',
	position: 'fixed',
	top: '0',
	left: '0',
	width: '10%',
	height: '100vh',
})

const SideBarElement = styled('p')({
	fontSize: '20px',
	color: 'white',
})

export function SideBar(props) {
	return (
		<SideBarDiv>
			<br/>
			<br/>
			<SideBarElement onClick = {() => props.pageStateChange('quiz')}>Quiz</SideBarElement>
			<SideBarElement>About</SideBarElement>
			<SideBarElement>Contact</SideBarElement>
			<SideBarElement>Light Mode</SideBarElement>
		</SideBarDiv>
	)
}