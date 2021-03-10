import React from 'react';
import { Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

import { useSelector } from 'react-redux'
import { selectDaily } from '../covidSlice';

const PieChart:React.FC = () => {
  const daily = useSelector(selectDaily); 
  const mortality = 
   100 * (daily[daily.length -1].Deaths / daily[daily.length -1].Confirmed);

   const pieChart = daily[0] && (
    <Doughnut
        data={{
          labels: ["Infected", "Recovered", "Deaths"],
          datasets: [
            {
              data: [
                daily[daily.length -1].Confirmed,
                daily[daily.length -1].Recovered,
                daily[daily.length -1].Deaths,
              ],
              backgroundColor: [
                "rgb(30, 111, 95)",
                "rgb(110, 189, 158)",
                "rgb(201, 215, 212)",
              ],
              
              hoverBackgroundColor: ["#36A2EB", "rgb(235, 225, 85)", "#FF6384"],
              borderColor: ["transparent", "transparent", "transparent"],
            },
          ],
        }}
        options={{
          legend :{
            position:"bottom",
            labels: {
              boxWidth: 15,
            },
          },
        }}
     />
    );
  
  return (
    <>
       <Typography align = "center" color="textSecondary" gutterBottom>
           Mortality { mortality.toFixed(2)}[%]
        </Typography>
        {pieChart}
    </>
  )
}

export default PieChart;