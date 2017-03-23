import React from 'react';
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
import fusioncharts from 'fusioncharts';
// Load the charts module
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

var myDataSource = {
    chart: {
        caption: "Harry's SuperMart",
        subCaption: "Top 5 stores in last month by revenue",
        numberPrefix: "$",
        theme: "ocean"
    },
    data: [{
        label: "Bakersfield Central",
        value: "880000"
    }, {
        label: "Garden Groove harbour",
        value: "730000"
    }, {
        label: "Los Angeles Topanga",
        value: "590000"
    }, {
        label: "Compton-Rancho Dom",
        value: "520000"
    }, {
        label: "Daly City Serramonte",
        value: "330000"
    }]
};

var chartConfigs = {
     id: "revenue-chart",
     renderAt: "revenue-chart-container",
     type: "column2d",
     width: 500,
     height: 400,
     dataFormat: "json",
     dataSource: myDataSource,
     events: {
         dataplotclick: function (ev, props) {
             document.getElementById("value").innerHTML = props.displayValue;
         }
     }
 };

var TriggerEventChart = React.createClass({

  render: function () {
    return (
      <div>
        <ReactFC {...chartConfigs}/>
        <p>The value that you have selected is: <span id='value'></span></p>
      </div>
    )
  }
});

module.exports = TriggerEventChart;
