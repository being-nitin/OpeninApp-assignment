import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
function Charts() {
    const dataPoints1 = [
        { x: 1, y: 150 },
        { x: 2, y: 210 },
        { x: 3, y: 390 },
        { x: 4, y: 110 },
        // Add more data points for the first dataset
      ];
    
      const dataPoints2 = [
        { x: 1, y: 170 },
        { x: 2, y: 200 },
        { x: 3, y: 430 },
        { x: 4, y: 120 },
        // Add more data points for the second dataset
      ];
    
      const options = {
        animationEnabled: true,
        // title: {
        //   fontWeight:700,
        //   // text: "Activities",
        //   // marginBottom:80,
        //   fontFamily: "Montserrat",
        //   horizontalAlign:"left",
        //   verticalAlign:"top",
        // },
        axisX: {
            title:"No of weeks",
          interval: 1,
          indexLabel: ["Week 1", "Week 2", "Week 3"], // Custom labels for each data point
        },
        axisY: {
          title: "",
          prefix: ""
        },
        data: [
          {
            yValueFormatString: "#,###",
            xValueFormatString: "",
            type: "spline",
            color:"#9BDD7C",
            dataPoints: dataPoints1
          },
          {
            yValueFormatString: "#,###",
            xValueFormatString: "#,###",
            type: "spline",
            color:"#E9A0A0",
            dataPoints: dataPoints2
          }
        ]
      };
    	
		return (
		<div className='chartDisplay'>
     <h1 className='headingActivity'>Activities</h1>
     <div className='freqDisplay'>
     <select className='selectItem' value="May-June">
        <option value="May-June">May-June 2021</option>
        <option value="June-July">June-July 2021</option>
      </select>

       <div className='dotDisplay'>
       <p><span className='guest'>.</span> Guest</p>
       <p><span className='user'>.</span> User</p>
      </div> 



     </div>

			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      
		</div>
		);
        }

export default Charts;   