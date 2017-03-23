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

var UpdateChart = React.createClass({
  getInitialState: function () {
      return {
          filterSource: ''
      };
  },
  handleCLick: function () {
      this.setState({
          filterSource: 'btn-update-data'
      });
  },
  render: function () {
    var revenueChartConfigs = {
        id: 'monthly-revenue-chart',
        renderAt: 'monthly-revenue-chart-container',
        type: 'column2d',
        width: 500,
        height: 400,
        dataFormat: 'json',
        dataSource: myDataSource,
        eventSource: this.state.filterSource,
        impactedBy: ['btn-update-data'],
        events: {
            dataplotclick: function (ev, props) {
                document.getElementById("value").innerHTML = props.displayValue;
            }
        }
    };

    if (this.state.filterSource && this.state.filterSource.length !== 0) {
        debugger;
        revenueChartConfigs.dataSource.data[2].label = 'Art Supply Store';
        revenueChartConfigs.dataSource.data[2].value = '420000';
        revenueChartConfigs.dataSource.data[3].label = 'P.C. Richard & Son';
        revenueChartConfigs.dataSource.data[3].value = '210000';
    } else {
        revenueChartConfigs.dataSource = myDataSource;
    }

    return (
      <div>
          <ReactFC {...revenueChartConfigs} />
          <p>The value that you have selected is: <span id='value'></span></p>
          <a  id='btn-update-data'
              onClick={this.handleCLick}
              className='btn btn-default'
              href='#'>{'Click me to change data'}</a>
      </div>
    )
  }
});

module.exports = UpdateChart;
