import React from 'react';
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
import fusioncharts from 'fusioncharts';
// Load the charts module
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

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

var props_multi_chart = {
    id: 'multi_chart',
    type: 'mscombi2d',
    width:600,
    height: 400,
    dataFormat: 'json',
    dataSource: myDataSource
};

var CombiChart = React.createClass({

  render: function () {
    return (
      <ReactFC {...props_multi_chart} />
    )
  }
});

module.exports = CombiChart;
