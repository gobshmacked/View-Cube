import React from 'react'
import { ResultCube } from './ResultCube'
import { SideBar } from './SideBar'
import { MainPage } from './MainPage'
import { styled } from '@mui/material'

const SideBarMainPageDiv = styled('div')({
	width: '100%',
	fontFamily: 'Arial',
	height: '100vh'
})

const HeaderDiv = styled('div')({
	display: 'flex',
	width: '100%',
	background: '#4C5658',
	height: '40px',
	justifyContent: 'center',
	alignItems: 'center',
})

const HeaderDivText = styled('p')({
	color: '#FFFFF1',
	fontWeight: 'bold',
	fontSize: '18px'
})

const AllElementsWrap = styled('div')({
	// display: 'flex',
	// flexDirection: 'column'
})

export function Screen () {
	const [page, setPage] = React.useState('quiz')
	function newPageState (newPage) {
		setPage(newPage)
	}
  	return (
    	<>
			<AllElementsWrap>
				<HeaderDiv>
					<HeaderDivText>Political Cube</HeaderDivText>
				</HeaderDiv>
				<SideBarMainPageDiv>
					<SideBar pageStateChange = {newPageState} currentPage = {page}/>
					{<MainPage currentPage = {page}/>}
				</SideBarMainPageDiv>
				{/* <ResultCube/> */}
			</AllElementsWrap>
   		</>
  	)
}