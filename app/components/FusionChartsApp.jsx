import React from 'react';
var CombiChart = require('CombiChart');
var TriggerEventChart = require('TriggerEventChart');
var UpdateChart = require('UpdateChart');
var CompleteChart = require('CompleteChart');

var FusionChartsApp = React.createClass({

  render: function () {
    return (
      <div>
        <CompleteChart />
      </div>
    )
  }
});

module.exports = FusionChartsApp;
