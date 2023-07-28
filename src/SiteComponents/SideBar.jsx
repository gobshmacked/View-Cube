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
	'@media (max-width: 600px)': {
		width: '30%'
	}
})

const SideBarDivHide = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
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

const SideBarHideButton = styled('button')({
	background: 'white',
	color: '#0A66C2',
	fontWeight: 'bold',
	border: '0px',
	borderRadius: '5px',
	fontSize: '20px'
})

export function SideBar(props) {
	if (props.sideBarShow === 'show') {
		return (<SideBarShow pageStateChange = {props.pageStateChange} sideBarShowChange = {props.sideBarShowChange}/>)
	} else {
		return (<SideBarHide pageStateChange = {props.pageStateChange} sideBarShowChange = {props.sideBarShowChange}/>)
	}
}

function SideBarShow(props) {
	return (
		<SideBarDiv>
			<br/>
			<br/>
			<br/>
			<SideBarHideButton onClick = {() => props.sideBarShowChange('hide')}>{'<'}</SideBarHideButton>
			<br/>
			<SideBarElement onClick = {() => props.pageStateChange('quiz')}>Quiz</SideBarElement>
			<SideBarElement onClick = {() => props.pageStateChange('about')}>About</SideBarElement>
			<SideBarElement onClick = {() => props.pageStateChange('contact')}>Contact</SideBarElement>
		</SideBarDiv>
	)
}

function SideBarHide(props) {
	return (
		<SideBarDivHide>
			<br/>
			<br/>
			<br/>
			<SideBarHideButton onClick = {() => props.sideBarShowChange('show')}>{'>'}</SideBarHideButton>
		</SideBarDivHide>
	)
}