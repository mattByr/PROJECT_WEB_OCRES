import React, { useState, useEffect } from 'react';
import {Bar} from 'react-chartjs-2';

function BarChart() {

    const [data, setData] = useState({});

    useEffect(() => {
        setData(
          {
            labels: ['January', 'February', 'March',
                     'April', 'May'],
            datasets: [
              {
                label: 'Number',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
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
                title:{
                display:true,
                text:'Number',
                fontSize:20
                },
                legend:{
                display:true,
                position:'right'
                }
            }}
        />
        </div>
    )
}

export default BarChart;
