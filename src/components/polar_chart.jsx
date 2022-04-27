import React from 'react';
import SelectBox from 'devextreme-react/select-box';
import {
  PolarChart,
  CommonSeriesSettings,
  Series,
  Margin,
} from 'devextreme-react/polar-chart';
import { types, data } from '.././utilities/data.js';

const dataSource = [{
  arg: 'January',
  day: 6,
  night: 2,
}, {
  arg: 'February',
  day: 7,
  night: 2,
}, {
  arg: 'March',
  day: 10,
  night: 3,
}, {
  arg: 'April',
  day: 14,
  night: 5,
}, {
  arg: 'May',
  day: 18,
  night: 8,
}, {
  arg: 'June',
  day: 21,
  night: 11,
}, {
  arg: 'July',
  day: 22,
  night: 13,
}, {
  arg: 'August',
  day: 22,
  night: 13,
}, {
  arg: 'September',
  day: 19,
  night: 11,
}, {
  arg: 'October',
  day: 15,
  night: 8,
}, {
  arg: 'November',
  day: 10,
  night: 5,
}, {
  arg: 'December',
  day: 7,
  night: 3,
}];

class Polar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentType: types[0],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <div className="long-title">
          <h3>Fruits and Vegetables</h3>
        </div>
        <div id="chart-demo">
          <PolarChart
            id="radarChart"
            dataSource={dataSource}
          >
            <CommonSeriesSettings type={this.state.currentType} />
            <Series
              valueField="day"
              name="Day"
              color="#ba4d51"
            />
            <Series
              valueField="night"
              name="Night"
              color="#5f8b95"
            />
            <Margin
              top={50}
              bottom={50}
              left={100}
            />
          </PolarChart>
          <div className="center">
            <div>Series Type</div>&nbsp;&nbsp;
            <SelectBox
              width={200}
              dataSource={types}
              value={this.state.currentType}
              onValueChanged={this.handleChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }

  handleChange(e) {
    this.setState({ currentType: e.value });
  }
}

export default Polar;
