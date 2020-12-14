import { scaleService } from 'chart.js';
import React, {useState, useEffect} from 'react';
import { Grid } from 'react-bootstrap';
import {Line} from 'react-chartjs-2';

function LineGraph(props) {

    var tabNumbers = []; 
    var tabLabels = []; 
    var tabList = [];
    
    if(props.listUser != null)
      {
        const userTab = props.listUser
        userTab.listUsers.map(element => {
          tabList.push(element.month)

        });
        const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

        var nbJanvier = countOccurrences(tabList, 1)
        if( nbJanvier > 0) { 
          tabLabels.push("Janvier")
          tabNumbers.push(nbJanvier) }

        var nbFevrier = countOccurrences(tabList, 2)
        if( nbFevrier > 0){
          tabLabels.push("Fevrier")
          tabNumbers.push(nbFevrier) }
        
        var nbMars = countOccurrences(tabList, 3)
        if( nbMars > 0){
          tabLabels.push("Mars")
          tabNumbers.push(nbMars) }

        var nbAvril = countOccurrences(tabList, 4)
        if( nbAvril > 0){
          tabLabels.push("Avril")
          tabNumbers.push(nbAvril) }

        var nbMai = countOccurrences(tabList, 5)
        if( nbAvril > 0){
          tabLabels.push("Avril")
          tabNumbers.push(nbAvril) }

        var nbJuin = countOccurrences(tabList, 6)
        if( nbJuin > 0){
          tabLabels.push("Juin")
          tabNumbers.push(nbJuin) }

        var nbJuillet = countOccurrences(tabList, 7)
        if( nbJuillet > 0){
          tabLabels.push("Juillet")
          tabNumbers.push(nbJuillet) }

        var nbAout = countOccurrences(tabList, 8)
        if( nbAout > 0){
          tabLabels.push("Aout")
          tabNumbers.push(nbAout) }

        var nbSeptembre = countOccurrences(tabList, 9)
        if( nbSeptembre > 0){
          tabLabels.push("Septembre")
          tabNumbers.push(nbSeptembre) }

        var nbOctobre = countOccurrences(tabList, 10)
        if( nbOctobre > 0){
          tabLabels.push("Octobre")
          tabNumbers.push(nbOctobre) }

        var nbNovembre = countOccurrences(tabList, 11)
        if( nbNovembre > 0){
          tabLabels.push("Novembre")
          tabNumbers.push(nbNovembre) }

        var nbDecembre = countOccurrences(tabList, 12)
        if( nbDecembre > 0){
          tabLabels.push("Decembre")
          tabNumbers.push(nbDecembre) }


      }
   
        var data = {
            labels: tabLabels,
            datasets: [
              {
                label: 'Users',
                fill: false,
                lineTension: 0.1,
                backgroundColor: '#4e73df',
                borderColor: '#4e73df',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#4e73df',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#4e73df',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                
                data: tabNumbers
                
              }
            ]
          }

    return (
        <div>
            <Line
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

export default LineGraph;