import React, { useState, useEffect } from 'react';
import {Bar} from 'react-chartjs-2';

function BarChart() {

    const [data, setData] = useState({});

    useEffect(() => {
        setData(
          {
            labels: ['Jan', 'Feb', 'Marc',
                     'Apr', 'May'],
            datasets: [
              {
                label: 'Products',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [0, 10, 20, 30, 40]
              }
            ]
          });
    }, [])


    return (
        <div>
            <Bar
            data={data}
            options={{
                
              scales: {
                xAxes: [{
                    gridLines: {
                        display:false
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display:false
                    }   
                }]
            },
               
            }}
        />
        </div>
    )
}

export default BarChart;