import React from 'react';
import ArrayGenerator from './data_gen_ex.js';
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

import Chart, {
  AdaptiveLayout,
  CommonSeriesSettings,
  Size,
  Tooltip,
} from 'devextreme-react/chart';

import PivotGrid, {
  FieldChooser,
} from 'devextreme-react/pivot-grid';

class App extends React.Component {
  componentDidMount() {
    this.pivotGrid.bindChart(this.chart, {
      dataFieldsDisplayMode: 'splitPanes',
      alternateDataFields: false,
    });
    setTimeout(() => {
      dataSource.expandHeaderItem('row', ['North America']);
      dataSource.expandHeaderItem('column', [2013]);
    });
  }

  render() {
    return (
      <React.Fragment>
        <Chart ref={(ref) => { this.chart = ref.instance; }}>
          <Size height={200} />
          <Tooltip enabled={true} customizeTooltip={customizeTooltip} />
          <CommonSeriesSettings type="bar" />
          <AdaptiveLayout width={450} />
        </Chart>

        <PivotGrid
          id="pivotgrid"
          dataSource={dataSource}
          allowSortingBySummary={true}
          allowFiltering={true}
          showBorders={true}
          showColumnTotals={false}
          showColumnGrandTotals={false}
          showRowTotals={false}
          showRowGrandTotals={false}
          ref={(ref) => { this.pivotGrid = ref.instance; }}
        >
          <FieldChooser enabled={true} height={400} />
        </PivotGrid>
      </React.Fragment>
    );
  }
}


const dataSource = new PivotGridDataSource({
  fields: [{
    caption: 'Organic',
    dataField: 'organic',
    customizeText: function (cellInfo) {

      if (cellInfo.value > 0) {return JSON.stringify(cellInfo.value) + ' organic'}

    },
    width: 150,
  }, {
    caption: 'Name',
    dataField: 'name',
    width: 150,
  }, {

    groupName: 'Farm Fresh Goods',
    area: 'column',
  },
  {
    groupName: 'Farm Fresh Goods',
    dataField: 'type',
    groupIndex: 0,
    width: 150,
  },
  {
    groupName: 'Farm Fresh Goods',
    dataField: 'name',
    groupIndex: 1,
    width: 150,
  },
  {
    caption: 'Price',
    dataField: 'price',
    dataType: 'number',
    format: 'currency',
    area: 'data',
    summaryType: 'sum',
    width: 150,
  },
  {
    dataField: 'date',
    dataType: 'date',
    area: 'row',
  }, {
    groupName: 'date',
    groupInterval: 'quarter',
    visible: false,
  }],
  store: [
    {
      organic: 1,
      type: 'vegetables',
      name: 'kale',
      date: 'Fri Jul 24 1953 22:09:13 GMT-0400 (Eastern Daylight Time)',
      price: 0.79
    },
    {
      organic: 1,
      type: 'vegetables',
      name: 'carrot',
      date: 'Thu Jan 01 1953 23:42:08 GMT-0500 (Eastern Standard Time)',
      price: 0.55
    },
    {
      organic: 1,
      type: 'vegetables',
      name: 'kale',
      date: 'Wed Aug 26 1953 11:36:20 GMT-0400 (Eastern Daylight Time)',
      price: 0.79
    },
    {
      organic: 1,
      type: 'vegetables',
      name: 'kale',
      date: 'Sat Jul 04 1953 08:04:09 GMT-0400 (Eastern Daylight Time)',
      price: 0.79
    },
    {
      organic: 1,
      type: 'fruits',
      name: 'strawberry',
      date: 'Thu May 28 1953 01:32:12 GMT-0400 (Eastern Daylight Time)',
      price: 0.55
    },
    {
      organic: 1,
      type: 'fruits',
      name: 'banana',
      date: 'Sun May 31 1953 12:09:20 GMT-0400 (Eastern Daylight Time)',
      price: 0.79
    },
    {
      organic: 0,
      type: 'vegetables',
      name: 'kale',
      date: 'Mon Dec 21 1953 17:55:04 GMT-0500 (Eastern Standard Time)',
      price: 0.79
    },
    {
      organic: 1,
      type: 'fruits',
      name: 'strawberry',
      date: 'Sun Jan 11 1953 12:52:42 GMT-0500 (Eastern Standard Time)',
      price: 0.79
    },
    {
      organic: 1,
      type: 'vegetables',
      name: 'lettuce',
      date: 'Thu Nov 26 1953 15:06:28 GMT-0500 (Eastern Standard Time)',
      price: 0.79
    },
    {
      organic: 0,
      type: 'vegetables',
      name: 'kale',
      date: 'Tue Jun 02 1953 03:40:49 GMT-0400 (Eastern Daylight Time)',
      price: 0.55
    },
    {
      organic: 0,
      type: 'fruits',
      name: 'strawberry',
      date: 'Sun Apr 05 1953 19:30:22 GMT-0500 (Eastern Daylight Time)',
      price: 0.55
    },
    {
      organic: 0,
      type: 'fruits',
      name: 'strawberry',
      date: 'Mon Dec 28 1953 17:40:46 GMT-0500 (Eastern Standard Time)',
      price: 0.55
    },
    {
      organic: 0,
      type: 'vegetables',
      name: 'carrot',
      date: 'Wed May 06 1953 21:31:54 GMT-0400 (Eastern Daylight Time)',
      price: 0.79
    },
    {
      organic: 0,
      type: 'vegetables',
      name: 'lettuce',
      date: 'Mon Jul 06 1953 15:19:55 GMT-0400 (Eastern Daylight Time)',
      price: 0.55
    },
    {
      organic: 0,
      type: 'vegetables',
      name: 'lettuce',
      date: 'Sun Jan 25 1953 04:28:49 GMT-0500 (Eastern Standard Time)',
      price: 0.55
    },
    {
      organic: 1,
      type: 'vegetables',
      name: 'kale',
      date: 'Fri Jan 16 1953 03:34:17 GMT-0500 (Eastern Standard Time)',
      price: 0.55
    },
    {
      organic: 0,
      type: 'fruits',
      name: 'banana',
      date: 'Tue Dec 29 1953 19:46:29 GMT-0500 (Eastern Standard Time)',
      price: 0.79
    },
    {
      organic: 0,
      type: 'fruits',
      name: 'apple',
      date: 'Fri Jun 19 1953 03:19:25 GMT-0400 (Eastern Daylight Time)',
      price: 0.55
    },
    {
      organic: 1,
      type: 'fruits',
      name: 'apple',
      date: 'Tue Oct 27 1953 14:09:04 GMT-0500 (Eastern Daylight Time)',
      price: 0.79
    },
    {
      organic: 1,
      type: 'vegetables',
      name: 'carrot',
      date: 'Tue Sep 29 1953 02:10:57 GMT-0500 (Eastern Daylight Time)',
      price: 0.79
    },
    {
      organic: 1,
      type: 'vegetables',
      name: 'carrot',
      date: 'Wed Jan 28 1953 08:18:58 GMT-0500 (Eastern Standard Time)',
      price: 0.79
    },
    {
      organic: 1,
      type: 'vegetables',
      name: 'lettuce',
      date: 'Sun Jun 07 1953 10:26:45 GMT-0400 (Eastern Daylight Time)',
      price: 0.55
    },
    {
      organic: 1,
      type: 'fruits',
      name: 'strawberry',
      date: 'Sun Apr 12 1953 00:32:19 GMT-0500 (Eastern Daylight Time)',
      price: 0.55
    },
    {
      organic: 0,
      type: 'vegetables',
      name: 'carrot',
      date: 'Fri Dec 11 1953 12:41:40 GMT-0500 (Eastern Standard Time)',
      price: 0.79
    },
    {
      organic: 0,
      type: 'vegetables',
      name: 'carrot',
      date: 'Wed May 13 1953 11:01:58 GMT-0400 (Eastern Daylight Time)',
      price: 0.79
    },
    {
      organic: 0,
      type: 'vegetables',
      name: 'carrot',
      date: 'Wed Feb 11 1953 06:43:50 GMT-0500 (Eastern Standard Time)',
      price: 0.55
    },
    {
      organic: 0,
      type: 'fruits',
      name: 'apple',
      date: 'Sat Mar 28 1953 16:07:38 GMT-0500 (Eastern Daylight Time)',
      price: 0.79
    },
    {
      organic: 1,
      type: 'fruits',
      name: 'banana',
      date: 'Sun Apr 26 1953 13:43:50 GMT-0400 (Eastern Daylight Time)',
      price: 0.79
    },
    {
      organic: 0,
      type: 'fruits',
      name: 'banana',
      date: 'Sat Jan 03 1953 14:23:37 GMT-0500 (Eastern Standard Time)',
      price: 0.55
    },
    {
      organic: 1,
      type: 'fruits',
      name: 'apple',
      date: 'Wed Nov 18 1953 20:28:38 GMT-0500 (Eastern Standard Time)',
      price: 0.55
    },
    {
      organic: 1,
      type: 'vegetables',
      name: 'carrot',
      date: 'Wed Aug 26 1953 16:34:19 GMT-0400 (Eastern Daylight Time)',
      price: 0.79
    },
    {
      organic: 0,
      type: 'fruits',
      name: 'apple',
      date: 'Sun Jan 25 1953 06:39:13 GMT-0500 (Eastern Standard Time)',
      price: 0.55
    },
    {
      organic: 1,
      type: 'vegetables',
      name: 'carrot',
      date: 'Fri Feb 20 1953 19:43:33 GMT-0500 (Eastern Standard Time)',
      price: 0.79
    },
    {
      organic: 0,
      type: 'fruits',
      name: 'apple',
      date: 'Sun Oct 25 1953 10:51:39 GMT-0500 (Eastern Daylight Time)',
      price: 0.79
    },
    {
      organic: 0,
      type: 'vegetables',
      name: 'lettuce',
      date: 'Fri Oct 02 1953 03:49:59 GMT-0500 (Eastern Daylight Time)',
      price: 0.55
    },
    {
      organic: 1,
      type: 'vegetables',
      name: 'kale',
      date: 'Fri Jul 17 1953 11:49:56 GMT-0400 (Eastern Daylight Time)',
      price: 0.79
    },
    {
      organic: 0,
      type: 'fruits',
      name: 'apple',
      date: 'Tue Jan 06 1953 18:51:43 GMT-0500 (Eastern Standard Time)',
      price: 0.79
    },
    {
      organic: 1,
      type: 'fruits',
      name: 'strawberry',
      date: 'Mon Sep 14 1953 01:55:48 GMT-0400 (Eastern Daylight Time)',
      price: 0.55
    },
    {
      organic: 0,
      type: 'vegetables',
      name: 'lettuce',
      date: 'Tue Jun 09 1953 13:25:33 GMT-0400 (Eastern Daylight Time)',
      price: 0.79
    },
    {
      organic: 0,
      type: 'fruits',
      name: 'banana',
      date: 'Fri Dec 11 1953 01:04:58 GMT-0500 (Eastern Standard Time)',
      price: 0.55
    },
    {
      organic: 1,
      type: 'vegetables',
      name: 'carrot',
      date: 'Mon Sep 21 1953 18:03:37 GMT-0400 (Eastern Daylight Time)',
      price: 0.79
    },
    {
      organic: 1,
      type: 'fruits',
      name: 'strawberry',
      date: 'Wed Aug 19 1953 05:59:35 GMT-0400 (Eastern Daylight Time)',
      price: 0.79
    },
    {
      organic: 1,
      type: 'fruits',
      name: 'apple',
      date: 'Wed Jul 01 1953 12:44:11 GMT-0400 (Eastern Daylight Time)',
      price: 0.55
    },
    {
      organic: 0,
      type: 'vegetables',
      name: 'carrot',
      date: 'Fri May 01 1953 00:20:39 GMT-0400 (Eastern Daylight Time)',
      price: 0.55
    },
    {
      organic: 0,
      type: 'vegetables',
      name: 'kale',
      date: 'Tue Mar 03 1953 15:23:36 GMT-0500 (Eastern Standard Time)',
      price: 0.55
    },
    {
      organic: 0,
      type: 'fruits',
      name: 'banana',
      date: 'Tue Jan 06 1953 22:47:54 GMT-0500 (Eastern Standard Time)',
      price: 0.55
    },
    {
      organic: 1,
      type: 'fruits',
      name: 'banana',
      date: 'Fri May 22 1953 16:23:58 GMT-0400 (Eastern Daylight Time)',
      price: 0.79
    },
    {
      organic: 0,
      type: 'fruits',
      name: 'banana',
      date: 'Sat Oct 03 1953 07:26:51 GMT-0500 (Eastern Daylight Time)',
      price: 0.79
    },
    {
      organic: 0,
      type: 'vegetables',
      name: 'carrot',
      date: 'Mon Jun 08 1953 01:59:02 GMT-0400 (Eastern Daylight Time)',
      price: 0.79
    },
    {
      organic: 1,
      type: 'vegetables',
      name: 'carrot',
      date: 'Sun Sep 27 1953 02:01:05 GMT-0500 (Eastern Daylight Time)',
      price: 0.55
    },
    {
      organic: 1,
      type: 'vegetables',
      name: 'carrot',
      date: 'Thu Jan 08 1953 07:40:05 GMT-0500 (Eastern Standard Time)',
      price: 0.55
    },
    {
      organic: 0,
      type: 'vegetables',
      name: 'carrot',
      date: 'Tue Mar 10 1953 02:47:44 GMT-0500 (Eastern Daylight Time)',
      price: 0.55
    },
    {
      organic: 0,
      type: 'fruits',
      name: 'apple',
      date: 'Thu Apr 23 1953 04:53:03 GMT-0500 (Eastern Daylight Time)',
      price: 0.55
    },
    {
      organic: 0,
      type: 'vegetables',
      name: 'kale',
      date: 'Wed Aug 05 1953 03:18:35 GMT-0400 (Eastern Daylight Time)',
      price: 0.55
    },
    {
      organic: 1,
      type: 'fruits',
      name: 'banana',
      date: 'Wed Sep 16 1953 21:15:14 GMT-0400 (Eastern Daylight Time)',
      price: 0.55
    },
    {
      organic: 1,
      type: 'fruits',
      name: 'strawberry',
      date: 'Fri Nov 13 1953 07:40:07 GMT-0500 (Eastern Standard Time)',
      price: 0.55
    },
    {
      organic: 1,
      type: 'vegetables',
      name: 'carrot',
      date: 'Sat Mar 28 1953 06:30:56 GMT-0500 (Eastern Daylight Time)',
      price: 0.55
    },
    {
      organic: 0,
      type: 'vegetables',
      name: 'carrot',
      date: 'Fri Feb 20 1953 10:20:39 GMT-0500 (Eastern Standard Time)',
      price: 0.55
    },
    {
      organic: 0,
      type: 'vegetables',
      name: 'lettuce',
      date: 'Thu May 28 1953 12:47:30 GMT-0400 (Eastern Daylight Time)',
      price: 0.55
    },
    {
      organic: 1,
      type: 'fruits',
      name: 'strawberry',
      date: 'Sun Dec 13 1953 18:53:08 GMT-0500 (Eastern Standard Time)',
      price: 0.55
    },
    {
      organic: 0,
      type: 'fruits',
      name: 'strawberry',
      date: 'Fri Oct 09 1953 14:14:57 GMT-0500 (Eastern Daylight Time)',
      price: 0.55
    },
    {
      organic: 0,
      type: 'fruits',
      name: 'strawberry',
      date: 'Sun Jun 14 1953 05:02:08 GMT-0400 (Eastern Daylight Time)',
      price: 0.79
    },
    {
      organic: 1,
      type: 'vegetables',
      name: 'kale',
      date: 'Mon Dec 21 1953 14:40:29 GMT-0500 (Eastern Standard Time)',
      price: 0.79
    },
    {
      organic: 0,
      type: 'vegetables',
      name: 'kale',
      date: 'Tue Mar 17 1953 07:25:47 GMT-0500 (Eastern Daylight Time)',
      price: 0.55
    },
    {
      organic: 0,
      type: 'vegetables',
      name: 'kale',
      date: 'Tue Dec 29 1953 14:54:11 GMT-0500 (Eastern Standard Time)',
      price: 0.55
    },
    {
      organic: 1,
      type: 'fruits',
      name: 'strawberry',
      date: 'Sun Nov 08 1953 15:52:50 GMT-0500 (Eastern Standard Time)',
      price: 0.55
    },
    {
      organic: 0,
      type: 'fruits',
      name: 'strawberry',
      date: 'Sun May 10 1953 10:12:40 GMT-0400 (Eastern Daylight Time)',
      price: 0.79
    },
    {
      organic: 1,
      type: 'fruits',
      name: 'strawberry',
      date: 'Mon May 04 1953 09:33:36 GMT-0400 (Eastern Daylight Time)',
      price: 0.79
    },
    {
      organic: 0,
      type: 'fruits',
      name: 'banana',
      date: 'Sat Jul 11 1953 10:42:59 GMT-0400 (Eastern Daylight Time)',
      price: 0.79
    },
    {
      organic: 1,
      type: 'vegetables',
      name: 'lettuce',
      date: 'Wed Jun 03 1953 19:20:09 GMT-0400 (Eastern Daylight Time)',
      price: 0.55
    },
    {
      organic: 1,
      type: 'vegetables',
      name: 'carrot',
      date: 'Mon Aug 03 1953 12:10:40 GMT-0400 (Eastern Daylight Time)',
      price: 0.55
    },
    {
      organic: 0,
      type: 'fruits',
      name: 'strawberry',
      date: 'Sun Jul 26 1953 15:51:33 GMT-0400 (Eastern Daylight Time)',
      price: 0.79
    },
    {
      organic: 1,
      type: 'vegetables',
      name: 'carrot',
      date: 'Fri Jan 16 1953 08:53:42 GMT-0500 (Eastern Standard Time)',
      price: 0.55
    },
    {
      organic: 1,
      type: 'vegetables',
      name: 'carrot',
      date: 'Tue Apr 21 1953 04:25:00 GMT-0500 (Eastern Daylight Time)',
      price: 0.79
    },
    {
      organic: 0,
      type: 'vegetables',
      name: 'carrot',
      date: 'Wed Mar 04 1953 15:22:23 GMT-0500 (Eastern Standard Time)',
      price: 0.79
    },
    {
      organic: 1,
      type: 'vegetables',
      name: 'carrot',
      date: 'Tue Oct 20 1953 16:55:18 GMT-0500 (Eastern Daylight Time)',
      price: 0.55
    },
    {
      organic: 1,
      type: 'fruits',
      name: 'apple',
      date: 'Fri Mar 13 1953 16:30:51 GMT-0500 (Eastern Daylight Time)',
      price: 0.79
    },
    {
      organic: 0,
      type: 'fruits',
      name: 'banana',
      date: 'Tue Feb 17 1953 01:57:12 GMT-0500 (Eastern Standard Time)',
      price: 0.55
    },
    {
      organic: 1,
      type: 'fruits',
      name: 'banana',
      date: 'Fri Apr 24 1953 07:28:22 GMT-0500 (Eastern Daylight Time)',
      price: 0.55
    },
    {
      organic: 1,
      type: 'vegetables',
      name: 'kale',
      date: 'Mon Aug 03 1953 05:16:48 GMT-0400 (Eastern Daylight Time)',
      price: 0.55
    },
    {
      organic: 0,
      type: 'fruits',
      name: 'banana',
      date: 'Sun May 24 1953 00:59:51 GMT-0400 (Eastern Daylight Time)',
      price: 0.55
    },
    {
      organic: 0,
      type: 'vegetables',
      name: 'kale',
      date: 'Fri Jan 23 1953 18:42:26 GMT-0500 (Eastern Standard Time)',
      price: 0.79
    },
    {
      organic: 1,
      type: 'fruits',
      name: 'banana',
      date: 'Mon Apr 06 1953 19:22:39 GMT-0500 (Eastern Daylight Time)',
      price: 0.79
    },
    {
      organic: 1,
      type: 'fruits',
      name: 'strawberry',
      date: 'Thu Apr 09 1953 06:43:56 GMT-0500 (Eastern Daylight Time)',
      price: 0.55
    },
    {
      organic: 1,
      type: 'fruits',
      name: 'apple',
      date: 'Wed Mar 18 1953 19:04:00 GMT-0500 (Eastern Daylight Time)',
      price: 0.55
    },
    {
      organic: 0,
      type: 'vegetables',
      name: 'kale',
      date: 'Fri Dec 11 1953 07:11:14 GMT-0500 (Eastern Standard Time)',
      price: 0.55
    },
    {
      organic: 1,
      type: 'fruits',
      name: 'strawberry',
      date: 'Fri May 01 1953 22:05:44 GMT-0400 (Eastern Daylight Time)',
      price: 0.55
    },
    {
      organic: 0,
      type: 'vegetables',
      name: 'kale',
      date: 'Wed Jan 28 1953 11:34:20 GMT-0500 (Eastern Standard Time)',
      price: 0.79
    },
    {
      organic: 0,
      type: 'vegetables',
      name: 'carrot',
      date: 'Tue May 05 1953 11:40:01 GMT-0400 (Eastern Daylight Time)',
      price: 0.79
    },
    {
      organic: 0,
      type: 'fruits',
      name: 'apple',
      date: 'Wed Apr 29 1953 08:13:41 GMT-0400 (Eastern Daylight Time)',
      price: 0.55
    },
    {
      organic: 1,
      type: 'vegetables',
      name: 'kale',
      date: 'Sun May 31 1953 19:27:21 GMT-0400 (Eastern Daylight Time)',
      price: 0.55
    },
    {
      organic: 1,
      type: 'fruits',
      name: 'strawberry',
      date: 'Sat Jun 27 1953 20:57:07 GMT-0400 (Eastern Daylight Time)',
      price: 0.55
    },
    {
      organic: 1,
      type: 'fruits',
      name: 'strawberry',
      date: 'Fri Nov 20 1953 19:45:06 GMT-0500 (Eastern Standard Time)',
      price: 0.55
    },
    {
      organic: 0,
      type: 'vegetables',
      name: 'kale',
      date: 'Wed May 27 1953 00:42:20 GMT-0400 (Eastern Daylight Time)',
      price: 0.79
    },
    {
      organic: 1,
      type: 'fruits',
      name: 'banana',
      date: 'Thu Sep 17 1953 16:02:14 GMT-0400 (Eastern Daylight Time)',
      price: 0.79
    },
    {
      organic: 0,
      type: 'fruits',
      name: 'banana',
      date: 'Thu Apr 09 1953 23:34:42 GMT-0500 (Eastern Daylight Time)',
      price: 0.79
    },
    {
      organic: 0,
      type: 'vegetables',
      name: 'carrot',
      date: 'Fri Aug 21 1953 21:34:27 GMT-0400 (Eastern Daylight Time)',
      price: 0.79
    },
    {
      organic: 1,
      type: 'vegetables',
      name: 'lettuce',
      date: 'Fri Dec 18 1953 02:06:02 GMT-0500 (Eastern Standard Time)',
      price: 0.55
    },
    {
      organic: 1,
      type: 'fruits',
      name: 'banana',
      date: 'Sat Feb 14 1953 15:34:08 GMT-0500 (Eastern Standard Time)',
      price: 0.55
    },
    {
      organic: 1,
      type: 'fruits',
      name: 'apple',
      date: 'Mon Mar 30 1953 17:43:58 GMT-0500 (Eastern Daylight Time)',
      price: 0.55
    }
  ],
});

const currencyFormatter = new Intl.NumberFormat(
  'en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  },
);

function customizeTooltip(args) {
  const valueText = currencyFormatter.format(args.originalValue);
  return {
    html: `${args.seriesName} | Total<div class="currency">${valueText}</div>`,
  };
}

export default App;
