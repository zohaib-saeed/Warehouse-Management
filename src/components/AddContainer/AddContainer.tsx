import React from 'react';
import { Input } from '@mantine/core';

import Wrapper from '../Shared/Wrapper';
import Buttons from '../Shared/Buttons';
import Topbar from './Subs/Topbar';
import Typography from '../Shared/Typography';
import PendingShipmentLines from './Subs/PendingShipmentLines';

const AddContainer: React.FC = () => {
  return (
    <Wrapper styles="flex-col items-center justify-start gap-7 bg-white-zircon pt-3 pb-6">
      {/* Searchbar + Add Container + Unpack + ClosePack */}
      <Topbar />
      {/* Pending Shipment Lines  + Containers */}
      <PendingShipmentLines />
    </Wrapper>
  );
};

export default AddContainer;
