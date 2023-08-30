import React from 'react';
import { Input } from '@mantine/core';

import Wrapper from '../Shared/Wrapper';
import Topbar from './Subs/Topbar';
import PendingShipmentLines from './Subs/PendingShipmentLines';
import Containers from './Subs/Containers/Containers';

const AddContainer: React.FC = () => {
  return (
    <Wrapper styles="flex-col items-center justify-start gap-3 bg-white-zircon pt-3 pb-6">
      {/* Searchbar + Add Container + Unpack + ClosePack */}
      <Topbar />
      <Wrapper styles="pt-1 pb-3 gap-4 bg-white-main rounded-md">
        {/* Pending Shipment Lines  + Containers */}
        <PendingShipmentLines />
      </Wrapper>

      <Wrapper styles=" py-1 gap-4 bg-white-main rounded-md">
        {/* Container  */}
        <Containers />
      </Wrapper>
    </Wrapper>
  );
};

export default AddContainer;
