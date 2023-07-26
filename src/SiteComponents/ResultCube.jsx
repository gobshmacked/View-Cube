import React from 'react'
import Plot from 'react-plotly.js';
import { styled } from '@mui/material'
import { finalX, finalY, finalZ } from './ConfigureResults.js'


const ResultsBlock = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	marginLeft: 'auto',
	marginRight: 'auto'
})

export function ResultCube () {
	let [screenWidth, setScreenWidth] = React.useState(window.innerWidth)
	let [screenHeight, setScreenHeight] = React.useState(window.innerHeight)
	return (
		<ResultsBlock>
			<Create2DPlot/>
    		<CreateCube screenHeight={screenHeight} screenWidth={screenWidth}/>
		</ResultsBlock>
		
		)
	}
	
function CreateCube(props) {
	return (
		<Plot
		data={[
			{
			x: [finalY], 
			y: [finalX], 
			z: [finalZ], 
			mode: 'markers', 
			type:'scatter3d',
			marker: {size: 12},
		},
		]}
		layout={{
			height: props.screenHeight * (2/3),
			width: props.screenWidth / 2,
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
					title: 'Deon - Util',
					backgroundcolor: "rgb(173, 216, 230)",
     				gridcolor: "rgb(255, 255, 255)",
     				showbackground: true,
				},
				camera: {
					center: {
						x: 0, y: 0, z: 0
					},
					eye: {
						x: 0.1, y: 0.1, z: 2.5
					}
				}
			},
		}}
		config={{
			displayModeBar: false,
			responsive: true
		}}
		onRelayout={(figure) => console.log(figure)}
		/>
	);
}

function Create2DPlot(props) {
	return (
		<Plot
		data={[
			{
			x: [finalX], 
			y: [finalY], 
			mode: 'markers', 
			type:'scatter',
			marker: {size: 12},
		},
		]}
		layout={{
			height: props.screenHeight,
			width: props.screenWidth,
			showlegend: false,
			//range: [-10, 10],
			xaxis: {
				range: [-10, 10],
				tickvals: [-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10],
			},
			yaxis: {
				range: [-10, 10],
				tickvals: [-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10]
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
		onRelayout={(figure) => console.log(figure)}
		/>
	)
}