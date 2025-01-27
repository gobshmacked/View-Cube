import React from 'react'
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
	height: '100%'
})

export function Screen () {
	const [page, setPage] = React.useState('quiz')
	const [sideBarShow, setSideBarShow] = React.useState('hide')
	function newPageState (newPage) {
		setPage(newPage)
		window.scrollTo(0,0);
	}
	function newSideBarShow (newShow) {
		setSideBarShow(newShow)
	}
  	return (
    	<>
			<AllElementsWrap>
				<SideBarMainPageDiv>
					<SideBar pageStateChange = {newPageState} currentPage = {page} sideBarShow = {sideBarShow} sideBarShowChange = {newSideBarShow}/>
					{<MainPage currentPage = {page} pageStateChange = {newPageState} sideBarShow = {sideBarShow}/>}
				</SideBarMainPageDiv>
			</AllElementsWrap>
   		</>
  	)
}