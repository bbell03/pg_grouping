import React, { useRef, createRef } from "react";
import {data} from "../utilities/data";
import PivotGridDataSource from "devextreme/ui/pivot_grid/data_source";

import Chart, {
  AdaptiveLayout,
  CommonSeriesSettings,
  Size,
  Tooltip
} from "devextreme-react/chart";

import PivotGrid, { FieldChooser } from "devextreme-react/pivot-grid";

// let data = ArrayGenerator(1000);
// console.log(data);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ds: dataSource
    };

    this.mainState = this.mainState.bind(this);
    this.fruitsState = this.fruitsState.bind(this);
    this.vegState = this.vegState.bind(this);

    this.chart = React.createRef();
    this.chart1 = React.createRef();
    this.chart2 = React.createRef();
    this.pivotGrid = React.createRef();
  }

  componentDidMount() {
    this.pivotGrid.current.instance.bindChart(this.chart.current.instance, {
      dataFieldsDisplayMode: "splitPanes",
      alternateDataFields: false
    });
    this.pivotGrid.current.instance.bindChart(this.chart1.current.instance, {
      dataFieldsDisplayMode: "splitPanes",
      alternateDataFields: false
    });
    this.pivotGrid.current.instance.bindChart(this.chart2.current.instance, {
      dataFieldsDisplayMode: "splitPanes",
      alternateDataFields: false
    });
    setTimeout(() => {
      this.state.ds.expandHeaderItem("row", ["North America"]);
      this.state.ds.expandHeaderItem("column", [2013]);
    });
  }

  mainState() {
    this.setState({ds: dataSource});
  }

  fruitsState() {
    this.setState({ ds: fruitsConfig });
  }

  vegState() {
    this.setState({ ds: vegConfig });
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.mainState}>Pivot 1</button>
        <button onClick={this.fruitsState}>Pivot 1</button>
        <button onClick={this.vegState}>Pivot 2</button>
        <Chart ref={this.chart}>
          <Size height={200} />
          <Tooltip enabled={true} customizeTooltip={customizeTooltip} />
          <CommonSeriesSettings type="area" />
          <AdaptiveLayout width={450} />
        </Chart>
        <Chart ref={this.chart1}>
          <Size height={200} />
          <Tooltip enabled={true} customizeTooltip={customizeTooltip} />
          <CommonSeriesSettings type="line" />
          <AdaptiveLayout width={450} />
        </Chart>
        <Chart ref={this.chart2}>
          <Size height={200} />
          <Tooltip enabled={true} customizeTooltip={customizeTooltip} />
          <CommonSeriesSettings type="bar" />
          <AdaptiveLayout width={450} />
        </Chart>

        <PivotGrid
          id="pivotgrid"
          dataSource={this.state.ds}
          allowSortingBySummary={true}
          allowFiltering={true}
          showBorders={true}
          showColumnTotals={false}
          showColumnGrandTotals={false}
          showRowTotals={false}
          showRowGrandTotals={false}
          ref={this.pivotGrid}
        >
          <FieldChooser enabled={true} height={400} />
        </PivotGrid>
      </React.Fragment>
    );
  }
}

const dataSource = new PivotGridDataSource({
  fields: [
    {
      caption: "Organic",
      dataField: "organic",
      summaryType: "sum",
      customizeText: function (cellInfo) {
        if (cellInfo.value > 0) {
          return JSON.stringify(cellInfo.value) + " organic";
        }
      },
      width: 150
    },
    {
      caption: "Name",
      dataField: "name",
      width: 150
    },
    {
      caption: "Type",
      dataField: "type",
      width: 150
    },
    {
      groupName: "Farm Fresh Goods",
      area: "row"
    },
    {
      groupName: "Farm Fresh Goods",
      dataField: "type",
      groupIndex: 0,
      width: 150
    },
    {
      groupName: "Farm Fresh Goods",
      dataField: "name",
      groupIndex: 1,
      width: 150
    },
    {
      caption: "Price",
      dataField: "price",
      dataType: "number",
      format: "currency",
      area: "data",
      summaryType: "sum",
      width: 150
    },
    {
      dataField: "date",
      dataType: "date",
      area: "column"
    },
    {
      groupName: "date",
      groupInterval: "year",
      expanded: "true"
    },
    {
      groupName: "date",
      groupInterval: "quarter",
    },
    {
      groupName: "date",
      groupInterval: "month",
    }
  ],
  store: data
});

const fruitsConfig = new PivotGridDataSource({
  fields: [
    {
      caption: "Organic",
      dataField: "organic",
      summaryType: "sum",
      customizeText: function (cellInfo) {
        if (cellInfo.value > 0) {
          return JSON.stringify(cellInfo.value) + " organic";
        }
      },
      width: 150
    },
    {
      caption: "Name",
      dataField: "name",
      width: 150
    },
    {
      caption: "Type",
      dataField: "type",
      width: 150
    },
    {
      area: "filter",
      dataField: "name",
      filterType: "include",
      filterValues: ["apple", "banana", "strawberry"]
    },
    {
      groupName: "Farm Fresh Goods",
      area: "row"
    },
    {
      groupName: "Farm Fresh Goods",
      dataField: "type",
      expanded: 'true',
      groupIndex: 0,
      width: 150
    },
    {
      groupName: "Farm Fresh Goods",
      dataField: "name",
      groupIndex: 1,
      width: 150
    },
    {
      caption: "Price",
      dataField: "price",
      dataType: "number",
      format: "currency",
      area: "data",
      summaryType: "sum",
      width: 150
    },
    {
      dataField: "date",
      dataType: "date",
      expanded: "true",
      area: "column"
    },
    {
      groupName: "date",
      groupInterval: "month",
    },
  ],
  store: data
});

const vegConfig = new PivotGridDataSource({
  fields: [
    {
      caption: "Organic",
      dataField: "organic",
      summaryType: "sum",
      customizeText: function (cellInfo) {
        if (cellInfo.value > 0) {
          return JSON.stringify(cellInfo.value) + " organic";
        }
      },
      width: 150
    },
    {
      caption: "Name",
      dataField: "name",
      width: 150
    },
    {
      caption: "Type",
      dataField: "type",
      width: 150
    },
    {
      area: "filter",
      dataField: "name",
      filterType: "include",
      filterValues: ["carrot", "lettuce", "kale"]
    },
    {
      groupName: "Farm Fresh Goods",
      area: "row"
    },
    {
      groupName: "Farm Fresh Goods",
      dataField: "type",
      groupIndex: 0,
      expanded: 'true',
      width: 150
    },
    {
      groupName: "Farm Fresh Goods",
      dataField: "name",
      groupIndex: 1,
      width: 150
    },
    {
      caption: "Price",
      dataField: "price",
      dataType: "number",
      format: "currency",
      area: "data",
      summaryType: "sum",
      width: 150
    },
    {
      groupName: "date",
      dataField: "date",
      dataType: "date",
      expanded: "true",
      area: "column"
    },
    {
      groupName: "date",
      groupInterval: "month",
    }
  ],
  store: data
});

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0
});

function customizeTooltip(args) {
  const valueText = currencyFormatter.format(args.originalValue);
  return {
    html: `${args.seriesName} | Total<div class="currency">${valueText}</div>`,
  };
}

export default App;
