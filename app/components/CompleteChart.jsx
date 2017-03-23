import React from 'react';
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
import fusioncharts from 'fusioncharts';
// Load the charts module
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

var dataChanged = false;

var myDataSource = {
    chart: {
        'caption': 'Actual Revenues, Targeted Revenues & Profits',
        'subcaption': 'Last year',
        'xaxisname': 'Month',
        'yaxisname': 'Amount (In USD)',
        'numberprefix': '$',
        'theme': 'ocean'
    },
    'categories': [
        {
            'category': [
                {
                    'label': 'Jan'
                },
                {
                    'label': 'Feb'
                },
                {
                    'label': 'Mar'
                },
                {
                    'label': 'Apr'
                },
                {
                    'label': 'May'
                },
                {
                    'label': 'Jun'
                },
                {
                    'label': 'Jul'
                },
                {
                    'label': 'Aug'
                },
                {
                    'label': 'Sep'
                },
                {
                    'label': 'Oct'
                },
                {
                    'label': 'Nov'
                },
                {
                    'label': 'Dec'
                }
            ]
        }
    ],
    'dataset': [
        {
            'seriesname': 'Actual Revenue',
            'data': [
                {
                    'value': '16000'
                },
                {
                    'value': '20000'
                },
                {
                    'value': '18000'
                },
                {
                    'value': '19000'
                },
                {
                    'value': '15000'
                },
                {
                    'value': '21000'
                },
                {
                    'value': '16000'
                },
                {
                    'value': '20000'
                },
                {
                    'value': '17000'
                },
                {
                    'value': '25000'
                },
                {
                    'value': '19000'
                },
                {
                    'value': '23000'
                }
            ]
        },
        {
            'seriesname': 'Projected Revenue',
            'renderas': 'line',
            'showvalues': '0',
            'data': [
                {
                    'value': '15000'
                },
                {
                    'value': '16000'
                },
                {
                    'value': '17000'
                },
                {
                    'value': '18000'
                },
                {
                    'value': '19000'
                },
                {
                    'value': '19000'
                },
                {
                    'value': '19000'
                },
                {
                    'value': '19000'
                },
                {
                    'value': '20000'
                },
                {
                    'value': '21000'
                },
                {
                    'value': '22000'
                },
                {
                    'value': '23000'
                }
            ]
        },
        {
            'seriesname': 'Profit',
            'renderas': 'area',
            'showvalues': '0',
            'data': [
                {
                    'value': '4000'
                },
                {
                    'value': '5000'
                },
                {
                    'value': '3000'
                },
                {
                    'value': '4000'
                },
                {
                    'value': '1000'
                },
                {
                    'value': '7000'
                },
                {
                    'value': '1000'
                },
                {
                    'value': '4000'
                },
                {
                    'value': '1000'
                },
                {
                    'value': '8000'
                },
                {
                    'value': '2000'
                },
                {
                    'value': '7000'
                }
            ]
        }
    ]
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
    var completeChartConfigs = {
        id: 'multi_chart',
        renderAt: 'multi_chart-container',
        type: 'mscombi2d',
        width: 600,
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
        if (dataChanged == false) {
          completeChartConfigs.dataSource.dataset[0].seriesname = 'New Actual Revenue';
          completeChartConfigs.dataSource.dataset[0].data[5].value = '15000';
          completeChartConfigs.dataSource.dataset[1].seriesname = 'New Projected Revenue';
          completeChartConfigs.dataSource.dataset[1].data[10].value = '7000';
          completeChartConfigs.dataSource.dataset[2].seriesname = 'New Profit';
          completeChartConfigs.dataSource.dataset[2].data[0].value = '2000';
          dataChanged = true;
        }else{
          completeChartConfigs.dataSource.dataset[0].seriesname = 'Actual Revenue';
          completeChartConfigs.dataSource.dataset[0].data[5].value = '21000';
          completeChartConfigs.dataSource.dataset[1].seriesname = 'Projected Revenue';
          completeChartConfigs.dataSource.dataset[1].data[10].value = '22000';
          completeChartConfigs.dataSource.dataset[2].seriesname = 'Profit';
          completeChartConfigs.dataSource.dataset[2].data[0].value = '4000';
          dataChanged = false;
        }
    } else {
        completeChartConfigs.dataSource = myDataSource;
    }

    return (
      <div>
          <ReactFC {...completeChartConfigs} />
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
