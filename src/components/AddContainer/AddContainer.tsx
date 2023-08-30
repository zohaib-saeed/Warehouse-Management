import React, { useEffect, useState } from 'react';
import { Input } from '@mantine/core';

import Wrapper from '../Shared/Wrapper';
import Topbar from './Subs/Topbar';
import PendingShipmentLines from './Subs/PendingShipmentLines';
import Containers from './Subs/Containers/Containers';

const AddContainer: React.FC = () => {
  // State
  const [containers, setContainers] = useState<string[]>(['Container 1']);

  const addContainerHandler = () => {
    setContainers((prevState) => {
      const allContainers = [...prevState];
      allContainers.push(`Container ${allContainers.length + 1}`);
      return allContainers;
    });
  };

  useEffect(() => {
    console.log(containers);
  }, [containers]);
  return (
    <Wrapper styles="flex-col items-center justify-start gap-3 bg-white-zircon pt-3 pb-6">
      {/* Searchbar + Add Container + Unpack + ClosePack */}
      <Topbar addContainerHandler={addContainerHandler} />
      <Wrapper styles="pt-1 pb-3 gap-4 bg-white-main rounded-md">
        {/* Pending Shipment Lines  + Containers */}
        <PendingShipmentLines />
      </Wrapper>

      {/* Container  */}
      <Containers containers={containers} />
    </Wrapper>
  );
};

export default AddContainer;
