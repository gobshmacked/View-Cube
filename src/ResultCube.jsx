import React from 'react'
import Plot from 'react-plotly.js';
import { styled } from '@mui/material'

export function ResultCube () {
  	CreatePlot()
  	return (
    	<CreatePlot/>
  	)
}

function CreatePlot() {
	return (
		<Plot
		data={[
			{
			x: [6], 
			y: [4], 
			z: [8], 
			mode: 'markers', 
			type:'scatter3d',
			}
		]}
		layout={{
			height: 800,
			width: 1200,
			title: `Your View Cube`,
			showlegend: false,
			xaxis: {
			title: 'HUUHHYEET',
			range: [1, 10],
			},
			yaxis: {range: [1, 10], title: "Price in Millions"},
			zaxis: {range: [1, 10], title: "Price in Millions"},
		}}
		config={{
			displayModeBar: false
		}}
		onRelayout={(figure) => console.log(figure)}
		/>
	);
}