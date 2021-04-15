import React from 'react';
import '/assets/styles/app.css';
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";

export default class GraphCA extends React.Component {
  
  
  componentDidMount() {  
    // Apply chart themes
    am4core.useTheme(am4themes_animated);
    am4core.useTheme(am4themes_kelly);

    // Create chart instance
    var chart = am4core.create("chartdivgraph", am4charts.XYChart3D);

    // Add data
    chart.data = [{
      "year": "2020",
      "CA": 21661,
      
    }, {
      "year": "2019",
      "CA": 23026,
    
    }, {
      "year": "2018",
      "CA": 22653,
    
    }];

    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.title.text = "Année";

    var  valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Chiffre d'affaires (Millions d'€)";
    valueAxis.min = 0;

    // Create series
    var series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = "CA";
    series.dataFields.categoryX = "year";
    series.name = "Chiffre d'affaires";
    series.tooltipText = "{name}: [bold]{valueY}M€[/]";

    // Add cursor
    chart.cursor = new am4charts.XYCursor();
  }

  render() {
    return (
      <div id="chartdivgraph"></div>
    );
  }
}