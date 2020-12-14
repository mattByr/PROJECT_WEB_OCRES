import React, {useState, useEffect} from 'react';
import { Pie, Doughnut} from 'react-chartjs-2';
import API from '../../utils/API';


function PieChart(props) {

  
    var tabNumbers = []; 
    var tabLabels = []; 
    
    if(props.numberPerCategory != null)
      {
        const categoryTab = props.numberPerCategory
        categoryTab.numberPerCategory.map(element => {
          tabNumbers.push(element.total)
          tabLabels.push(element._id)

        });
      }
      var data = {
        labels: tabLabels,
        datasets: [
        {
        label: 'Average Population',
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
          '#00A6B4',
          '#6800B4'
        ],
        hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000',
        '#003350',
        '#35014F'
        ],        
        data : tabNumbers
        }]
       }
        
    /*const [data, setData] = useState({});

    useEffect(() => {
      
        setData(
          {
            labels: ['Fruits-Vegetables', 'Cereals', 'Dairy Product',
                     'Meat-Fish-Egg', 'Sugar Product'],

            datasets: [
              {
                label: 'Average Population',
                backgroundColor: [
                  '#B21F00',
                  '#C9DE00',
                  '#2FDE00',
                  '#00A6B4',
                  '#6800B4'
                ],
                hoverBackgroundColor: [
                '#501800',
                '#4B5000',
                '#175000',
                '#003350',
                '#35014F'
                ],
                
                
                data : [12,52,36,9,56]
              }
            ]
          });
    }, [])*/

   return (
        <div>
        <Doughnut
          data={data}
          options={{
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        </div>
    )
}

export default PieChart;