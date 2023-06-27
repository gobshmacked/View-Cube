import React from 'react'
import { styled } from '@mui/material'

const SideBarDiv = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	background: '#0A66C2',
	flexGrow: '1'
})

const SideBarElement = styled('p')({
	fontSize: '20px',
	color: 'white',
	fontWeight: 'bold'
})

export function SideBar(props) {
	return (
		<SideBarDiv>
			<SideBarElement onClick = {() => props.pageStateChange('quiz')}>Quiz</SideBarElement>
			<SideBarElement>About</SideBarElement>
			<SideBarElement>Contact</SideBarElement>
		</SideBarDiv>
	)
}