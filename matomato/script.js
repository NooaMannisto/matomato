
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    async function drawChart() {
     

      let url = 'https://api.thingspeak.com/channels/1527798/feeds.json?results=20';

      const fetchResults = await fetch(url);
      const jsonResult = await fetchResults.json();
      const feedsResults = jsonResult.feeds;

      let editRows = [['Time', 'Lämpötila']];

      for (const i in feedsResults) {
        editRows.push([feedsResults[i].created_at, parseInt(feedsResults[i].field1.split('.')[0])]);                                            //+= " " + feedsResults[i].field1.split('.')[0];

      }

     

      document.getElementById("resultTable").innerHTML = editRows;

      var data = google.visualization.arrayToDataTable(editRows);


      


      var options = {
        title: 'Lämpötila',
        curveType: 'function',
        legend: { position: 'bottom' }
      };


      let editRows2 = [['Time', 'Ilmankosteus']];
      for (const i in feedsResults) {
        editRows2.push([feedsResults[i].created_at, parseInt(feedsResults[i].field2.split('.')[0])]);                                            //+= " " + feedsResults[i].field1.split('.')[0];

      }
      

      document.getElementById("resultTable").innerHTML = editRows2;
      var data2 = google.visualization.arrayToDataTable(editRows2);

      var options2 = {
        title: 'Ilmankosteus',
        curveType: 'function',
        legend: { position: 'bottom' }
      };

      var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
      chart.draw(data, options);

      var chart2 = new google.visualization.ColumnChart(document.getElementById('curve'));
      chart2.draw(data2, options2);

     
    let editRows3 = [['Time', 'Kastemato']];
      for (const i in feedsResults) {
        editRows3.push([feedsResults[i].created_at, parseInt(feedsResults[i].field3.split('.')[0])]);                                            //+= " " + feedsResults[i].field1.split('.')[0];

      }
      
      document.getElementById("resultTable").innerHTML = editRows3;
      var data3 = google.visualization.arrayToDataTable(editRows3);
  

    

      var options3 = {
        title: 'madon kaste',
        hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
        vAxis: {minValue: 0}
      };
    

      var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
      chart.draw(data3, options3);
    

    let editRows4 = [['Time', 'Kuumemato']];
      for (const i in feedsResults) {
        editRows4.push([feedsResults[i].created_at, parseInt(feedsResults[i].field4.split('.')[0])]);                                            //+= " " + feedsResults[i].field1.split('.')[0];

      }
      
      document.getElementById("resultTable").innerHTML = editRows4;
      var data4 = google.visualization.arrayToDataTable(editRows4);
   
     

        var options4 = {
          title: 'madon kuume',
          vAxis: {title: 'matokuume'},
          isStacked: true
        };  
        

      var chart = new google.visualization.SteppedAreaChart(document.getElementById('kuume'));
      chart.draw(data4, options4);
      
      
    

    setTimeout(function () { drawChart() }, 3000);
    
      }

  