import React from 'react'
import { ResultCube } from './ResultCube'
import { SideBar } from './SideBar'
import { MainPage } from './MainPage'
import { styled } from '@mui/material'

const SideBarMainPageDiv = styled('div')({
	display: 'flex',
	width: '100%',
	fontFamily: 'Arial'
})

export function Screen () {
	const [page, setPage] = React.useState('quiz')
	function newPageState (newPage) {
		setPage(newPage)
	}
  	return (
    	<>
			<SideBarMainPageDiv>
				<SideBar pageStateChange = {newPageState} currentPage = {page}/>
				<MainPage currentPage = {page}/>
			</SideBarMainPageDiv>
      		{/* <ResultCube/> */}
   		</>
  	)
}