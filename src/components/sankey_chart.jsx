import React from 'react';

import Sankey, {
  Tooltip,
  Link,
  Node,
} from 'devextreme-react/sankey';

const data = [
  { source: 'Spain', target: 'United States of America', weight: 2 },
  { source: 'Germany', target: 'United States of America', weight: 8 },
  { source: 'France', target: 'United States of America', weight: 4 },
  { source: 'Germany', target: 'Great Britain', weight: 2 },
  { source: 'France', target: 'Great Britain', weight: 4 },
  { source: 'United States of America', target: 'Australia', weight: 6 },
  { source: 'United States of America', target: 'New Zealand', weight: 5 },
  { source: 'United States of America', target: 'Japan', weight: 3 },
  { source: 'Great Britain', target: 'New Zealand', weight: 4 },
  { source: 'Great Britain', target: 'Japan', weight: 1 },
];

class SankeyChart extends React.Component {
  render() {
    return (
      <Sankey id="sankey"
        dataSource={data}
        sourceField="source"
        targetField="target"
        weightField="weight"
        title="Commodity Turnover in 2017"
      >
        <Tooltip
          enabled={true}
          customizeLinkTooltip={customizeLinkTooltip}
        >
        </Tooltip>

        <Link
          colorMode="gradient">
        </Link>
        <Node
          width={8}
          padding={30}>
        </Node>

      </Sankey>
    );
  }
}

function customizeLinkTooltip(info) {
  return {
    html: `<b>From:</b> ${info.source}<br/><b>To:</b> ${info.target}<br/><b>Weight:</b> ${info.weight}`,
  };
}

export default SankeyChart;
