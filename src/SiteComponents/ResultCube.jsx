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
  	CreatePlot()
  	return (
		<ResultsBlock>
    		<CreatePlot/>
		</ResultsBlock>
		
  	)
}

function CreatePlot() {
	return (
		<Plot
		data={[
			{
			x: [finalX], 
			y: [finalY], 
			z: [finalZ], 
			mode: 'markers', 
			type:'scatter3d',
			marker: {size: 12}
		},
		]}
		layout={{
			height: 800,
			width: 1200,
			title: `Your Political Alignment`,
			showlegend: false,
			range: [-10, 10],
			scene: {
				xaxis: {
					range: [-10, 10],
					title: 'Left - Right',
					backgroundcolor: "rgb(255, 102, 102)",
     				gridcolor: "rgb(255, 255, 255)",
     				showbackground: true,
				},
				yaxis: {
					range: [-10, 10],
					title: 'Libertarian - Authoritarian',
					backgroundcolor: "rgb(144, 238, 144)",
     				gridcolor: "rgb(255, 255, 255)",
     				showbackground: true,
				},
				zaxis: {
					range: [-10, 10],
					title: 'Means - Ends',
					backgroundcolor: "rgb(173, 216, 230)",
     				gridcolor: "rgb(255, 255, 255)",
     				showbackground: true,
				},
			}
		}}
		config={{
			displayModeBar: false
		}}
		onRelayout={(figure) => console.log(figure)}
		/>
	);
}