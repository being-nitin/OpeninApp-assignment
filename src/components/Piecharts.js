import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
function Piecharts() {
		const options = {
			// exportEnabled: true,
			animationEnabled: true,
			title: {
				text: "Top products",
                horizontalAlign:"left"
			},
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}%",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				indexLabel: "{label} - {y}%",
				dataPoints: [
					{ y: 55, label: "Basic Tees",color:"#98D89E"
                },
					{ y: 31, label: "Custom Short Pants",color:"#F6DC7D" },
					{ y: 14, label: "Super Hoodies",color:"#EE8484" },
				]
			}]
		}
		return (
		<div className='piechart'>
        <div className='piechartSelect'>
        <select className='selectItem' value="May-June">
        <option value="May-June">May-June 2021</option>
        <option value="June-July">June-July 2021</option>
      </select>
      </div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
export default Piecharts;