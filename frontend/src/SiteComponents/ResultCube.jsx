import React from 'react'
import Plot from 'react-plotly.js';
import { styled } from '@mui/material'
import Slider from '@mui/material/Slider';
import { finalX, finalY, finalU, finalR } from './ConfigureResults.js'


export function ResultCube () {
	return (
		<ResultsBlock>
			<br/>
			<WritingBlock>
				<InstructionHeadingTop>Results</InstructionHeadingTop>
			</WritingBlock>
				<br/>
			<ResultTile>
				<InstructionHeading>Your Political Views Map</InstructionHeading>
				<PlotBlock><Create2DPlot/></PlotBlock>
				<BlackWriting>{'Economic Scale: '}{finalX}</BlackWriting>
				<BlackWriting>{'Social Scale: '}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{finalY}</BlackWriting>
			</ResultTile>
				<br/><br/><br/>
			<ResultTile>
				<InstructionHeading>Utilitarianism Scale</InstructionHeading>
				<BlackWriting>{'Utilitarianism Scale:'}&nbsp;{finalU}</BlackWriting>
				<SliderDiv>
					<SliderLabel>-10</SliderLabel>
					<PrettoSlider defaultValue = {CalculateSliderNumber(finalU)}/>
					<SliderLabel>10</SliderLabel>
				</SliderDiv>
			</ResultTile>
				<br/><br/><br/>
				<ResultTile>
				<InstructionHeading>Rational Egoism Scale</InstructionHeading>
				<BlackWriting>{'Rational Egoism Scale:'}&nbsp;{finalR}</BlackWriting>
				<SliderDiv>
					<SliderLabel>-10</SliderLabel>
					<PrettoSlider defaultValue = {CalculateSliderNumber(finalR)}/>
					<SliderLabel>10</SliderLabel>
				</SliderDiv>
			</ResultTile>
				<br/><br/><br/>
			{finalU >= finalR && <ResultTile>
				<InstructionHeading>Your Political Alignment Test</InstructionHeading>
				<BlackWriting>{'Economic Scale: '}{finalX}</BlackWriting>
				<BlackWriting>{'Social Scale: '}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{finalY}</BlackWriting>
				<BlackWriting>{'Utilitarianism Scale: '}&nbsp;&nbsp;&nbsp;{finalU}</BlackWriting>
				<CreateCube philosophyType = {'Util'} axis3 = {finalU}/>
				<br/><br/><br/><br/>
			</ResultTile>}
			{finalR > finalU && <ResultTile>
				<InstructionHeading>Your Political Alignment Test</InstructionHeading>
				<BlackWriting>{'Economic Scale: '}{finalX}</BlackWriting>
				<BlackWriting>{'Social Scale: '}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{finalY}</BlackWriting>
				<BlackWriting>{'Rational Egoism Scale: '}&nbsp;&nbsp;&nbsp;{finalR}</BlackWriting>
				<CreateCube philosophyType = {'R Egoism'} axis3 = {finalR}/>
				<br/><br/><br/><br/>
			</ResultTile>}
			<br/><br/><br/><br/>
		</ResultsBlock>
		
		)
	}
	
	function CreateCube(props) {
		let finalHeight = window.innerHeight * (6/7)
		let finalWidth = window.innerHeight * (6/7)
		if (window.innerWidth < 600) {
			finalHeight = window.innerWidth * 1.1
			finalWidth = window.innerWidth * 0.9
		}
		return (
			<Plot
			data={[
				{
					x: [finalY], 
					y: [finalX], 
					z: [props.axis3], 
					mode: 'markers', 
					type:'scatter3d',
					marker: {size: 12},
				},
			]}
			layout={{
				height: finalHeight,
				width: finalWidth,
				showlegend: false,
				range: [-10, 10],
				scene: {
					xaxis: {
						range: [-10, 10],
						title: 'Auth - Lib',
						backgroundcolor: "rgb(255, 102, 102)",
						gridcolor: "rgb(255, 255, 255)",
						showbackground: true,
					},
					yaxis: {
						range: [-10, 10],
						title: 'Left - Right',
						backgroundcolor: "rgb(144, 238, 144)",
						gridcolor: "rgb(255, 255, 255)",
						showbackground: true,
					},
					zaxis: {
						range: [-10, 10],
						title: props.philosophyType,
						backgroundcolor: "rgb(173, 216, 230)",
						gridcolor: "rgb(255, 255, 255)",
						showbackground: true,
					},
					camera: {
						center: {
						x: 0, y: 0, z: 0
					},
					eye: {
						// x: 0.1, y: 0.1, z: 2.5
						x: 1.9, y: 1.9, z: 1.4
					}
				}
			},
		}}
		config={{
			displayModeBar: false,
			responsive: true
		}}
		/>
		);
	}
	
	function Create2DPlot() {
		let finalHeight = window.innerHeight * (6/7)
		let finalWidth = window.innerHeight * (6/7)
		if (window.innerWidth < 600) {
			finalHeight = window.innerWidth 
			finalWidth = window.innerWidth * 9/10
		}
		return (
			<Plot
			data={[
				{
					x: [finalX], 
					y: [finalY], 
					mode: 'markers', 
					type:'scatter',
					marker: {size: 14, color: 'black'},
				},
			]}
			layout={{
				height: finalHeight,
				width: finalWidth,
				showlegend: false,
				xaxis: {
					range: [-10, 10],
					tickvals: [-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10],
			},
			yaxis: {
				range: [-10, 10],
				tickvals: [-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10],
			},
			annotations: [
				{
					xref: 'paper',
        			yref: 'paper',
        			x: 0.5,
        			y: -0.1,
        			text: 'Libertarian',
        			showarrow: false,
        			xanchor: 'center',
        			yanchor: 'top',
				},
				{
					xref: 'paper',
        			yref: 'paper',
        			x: 0.5,
        			y: 1.05,
        			text: 'Authoritarian',
        			showarrow: false,
        			xanchor: 'center',
        			yanchor: 'bottom',
				},
				{
					xref: 'paper',
        			yref: 'paper',
        			x: -0.05,
        			y: 0.5,
        			text: 'Left',
        			showarrow: false,
        			xanchor: 'right',
        			yanchor: 'middle',
        			textangle: -90,
				},
				{
					xref: 'paper',
        			yref: 'paper',
        			x: 1.05,
        			y: 0.5,
        			text: 'Right',
        			showarrow: false,
        			xanchor: 'left',
        			yanchor: 'middle',
					textangle: -90,
				}
			],
			shapes: [
				{
					type: 'rect',
					x0: 0,
					y0: 0,
					x1: 10,
					y1: 10,
					fillcolor: 'red',
					opacity: 0.5,
					layer: 'below'
				},
				{
					type: 'rect',
					x0: 0,
					y0: 0,
					x1: -10,
					y1: -10,
					fillcolor: 'green',
					opacity: 0.5,
					layer: 'below'
				},
				{
					type: 'rect',
					x0: 0,
					y0: 0,
					x1: -10,
					y1: 10,
					fillcolor: 'blue',
					opacity: 0.5,
					layer: 'below'
				},
				{
					type: 'rect',
					x0: 0,
					y0: 0,
					x1: 10,
					y1: -10,
					fillcolor: 'yellow',
					opacity: 0.5,
					layer: 'below'
				}
			]
		}}
		config={{
			displayModeBar: false
		}}
		/>
		)
	}
	
	const CalculateSliderNumber = (num) => {
		if (num > 0) {
			return num * 5 + 50
		} else if (num < 0) {
			return Math.abs(num * -5 - 50)
		}
		return 50
	}
	
	const PrettoSlider = styled(Slider)({
		color: '#52af77',
		height: 8,
		marginTop: '8px',
		'& .MuiSlider-track': {
			border: 'none',
		},
		'& .MuiSlider-thumb': {
			height: 24,
			width: 24,
			backgroundColor: '#fff',
			border: '2px solid currentColor',
			'&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
				boxShadow: 'inherit',
			},
			'&:before': {
		display: 'none',
	},
},
'& .MuiSlider-valueLabel': {
	lineHeight: 1.2,
	fontSize: 12,
	background: 'unset',
	padding: 0,
	width: 32,
	height: 32,
	borderRadius: '50% 50% 50% 0',
	backgroundColor: '#52af77',
	transformOrigin: 'bottom left',
	transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
	'&:before': { display: 'none' },
	'&.MuiSlider-valueLabelOpen': {
		transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
	},
	'& > *': {
		transform: 'rotate(45deg)',
	},
},
});

// Material UI Styles //

const ResultsBlock = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	marginLeft: 'auto',
	marginRight: 'auto',
	background: '#DEEFFF',
	'@media (max-width: 600px)': {
		width: '90%',
	}
})

const PlotBlock = styled('div')({
	marginLeft: 'auto',
	marginRight: 'auto',
	zIndex: '1',
})

const SliderDiv = styled('div')({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-around',
})

const SliderLabel = styled('p')({
	color: '#000000',
	fontFamily: 'Fredoka',
	marginRight: '20px',
	marginLeft: '20px',
})

const WritingBlock = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'left',
	alignItems: 'flex-start',
	marginTop: '20px'
})

const InstructionHeading = styled('p')({
	color: '#22305B',
	fontFamily: 'Staatliches',
	fontSize: '25px',
	'@media (max-width: 600px)': {
		fontSize: '23px'
	}
})

const InstructionHeadingTop = styled(InstructionHeading)({
	marginLeft: 'auto',
	marginRight: 'auto',
	marginBottom: '0px',
	fontSize: '30px',
	'@media (max-width: 600px)': {
		marginLeft: 'auto',
		marginRight: 'auto'
	}
})

const BlackWriting = styled('p')({
	color: '#000000',
	fontFamily: 'Fredoka',
})

const ResultTile = styled('div')({
	background: '#D1E6FF',
	borderRadius: '20px',
	paddingBottom: '10px'
})