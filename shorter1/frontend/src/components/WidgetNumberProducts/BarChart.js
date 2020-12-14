import React, { useState, useEffect } from 'react';
import {Bar} from 'react-chartjs-2';

function BarChart(props) {



    var tabNumbers = []; 
    var tabLabels = []; 
    var tabList = [];
    
    if(props.listProduct != null)
      {
        const productTab = props.listProduct
        productTab.listProducts.map(element => {
          tabList.push(element.month)

        });
        const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
        var test = countOccurrences(tabList, 12);

        var nbJanvier = countOccurrences(tabList, 1)
        if( nbJanvier > 0) { 
          tabLabels.push("January")
          tabNumbers.push(nbJanvier) }

        var nbFevrier = countOccurrences(tabList, 2)
        if( nbFevrier > 0){
          tabLabels.push("February")
          tabNumbers.push(nbFevrier) }
        
        var nbMars = countOccurrences(tabList, 3)
        if( nbMars > 0){
          tabLabels.push("March")
          tabNumbers.push(nbMars) }

        var nbAvril = countOccurrences(tabList, 4)
        if( nbAvril > 0){
          tabLabels.push("April")
          tabNumbers.push(nbAvril) }

        var nbMai = countOccurrences(tabList, 5)
        if( nbAvril > 0){
          tabLabels.push("May")
          tabNumbers.push(nbAvril) }

        var nbJuin = countOccurrences(tabList, 6)
        if( nbJuin > 0){
          tabLabels.push("June")
          tabNumbers.push(nbJuin) }

        var nbJuillet = countOccurrences(tabList, 7)
        if( nbJuillet > 0){
          tabLabels.push("July")
          tabNumbers.push(nbJuillet) }

        var nbAout = countOccurrences(tabList, 8)
        if( nbAout > 0){
          tabLabels.push("August")
          tabNumbers.push(nbAout) }

        var nbSeptembre = countOccurrences(tabList, 9)
        if( nbSeptembre > 0){
          tabLabels.push("September")
          tabNumbers.push(nbSeptembre) }

        var nbOctobre = countOccurrences(tabList, 10)
        if( nbOctobre > 0){
          tabLabels.push("October")
          tabNumbers.push(nbOctobre) }

        var nbNovembre = countOccurrences(tabList, 11)
        if( nbNovembre > 0){
          tabLabels.push("November")
          tabNumbers.push(nbNovembre) }

        var nbDecembre = countOccurrences(tabList, 12)
        if( nbDecembre > 0){
          tabLabels.push("December")
          tabNumbers.push(nbDecembre) }


      }


    var data = {
      labels: tabLabels,
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
          data: tabNumbers
        }
      ]
    }

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
