import React from 'react'
import Plot from 'react-plotly.js';

export function ResultCube () {
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
        xaxis: {range: [1, 10], title: "Square Meters"},
        yaxis: {range: [1, 10], title: "Price in Millions"},
        yaxis: {range: [1, 10], title: "Price in Millions"},
      }}
      onRelayout={(figure) => console.log(figure)}
    />
  );
}