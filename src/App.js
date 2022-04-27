import React from 'react';
import PivotGrid from './components/pg';
import PolarChart from './components/polar_chart';
import SankeyChart from './components/sankey_chart';
import Gantt from './components/gantt';

export default function App() {
  return(<React.Fragment><Gantt/><PivotGrid/><SankeyChart/><PolarChart/></React.Fragment>)
}
