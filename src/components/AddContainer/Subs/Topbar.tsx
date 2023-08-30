import React from 'react';
import { Input } from '@mantine/core';
import { AiOutlineScan as ScanIcon } from 'react-icons/ai';

import Wrapper from '../../Shared/Wrapper';
import Buttons from '../../Shared/Buttons';

interface Props {
  addContainerHandler: () => void;
}

const Topbar: React.FC<Props> = ({ addContainerHandler }) => {
  return (
    <Wrapper styles="items-start md:items-center justify-between flex-col md:flex-row mdl:justify-start gap-3 bg-white-main py-[10px] rounded-md">
      <div className="flex items-center justify-start gap-1">
        <Input
          icon={<ScanIcon className="w-[20px] h-[20px]" />}
          placeholder="Scan Item ID"
          radius="md"
          size="md"
          classNames={{
            wrapper:
              'w-full max-w-[330px] min-w-[220px] xs:min-w-[270px] mds:min-w-[300px] mdl:min-w-[330px] text-gray-storm',
            input:
              'border-2 border-solid bg-white-zircon bg-opacity-0 border-gray-amour focus:outline-0 focus:border-gray-amour text-base h-[40px] min-h-[28px] font-medium rounded',
          }}
        />
        <Buttons.Filled
          text="Scan Item"
          styles="text-white-main bg-primary h-[40px] rounded hover:bg-opacity-90  transition-all duration-300"
        />
      </div>
      <div className="flex items-center justify-start gap-2 mdl:gap-4">
        <Buttons.Filled
          event={addContainerHandler}
          text="Add Container"
          styles="text-gray-storm bg-gray-amour rounded h-[40px]"
        />
        <Buttons.Filled text="Unpack" styles="text-gray-storm bg-gray-amour rounded h-[40px]" />
        <Buttons.Filled text="Close Pack" styles="text-gray-storm bg-gray-amour rounded h-[40px]" />
      </div>
    </Wrapper>
  );
};

export default Topbar;
