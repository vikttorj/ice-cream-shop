import React, { Component } from 'react';

import Panel from '../Panel/Panel';
import OrderTicket from '../OrderTicket/OrderTicket';

class OrderOverviewPaid extends Component {
  render() {
    return (
      <Panel title="Paids Orders" horizontalScroll>
        <OrderTicket
          customerName="Cindy"
          cone={true}
          status="pending"
          scoops={{
            'Vanilla': 1,
            'Chocolate': 3,
          }}
        />
      </Panel>
    );
  }
};

export default OrderOverviewPaid;

