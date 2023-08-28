import React from 'react';
import Typography from '../../../Shared/Typography';
import Pagination from '../../../Shared/Pagination';
import { ScrollArea } from '@mantine/core';

interface Props {
  containerNumber: string;
}

const Container: React.FC<Props> = ({ containerNumber }) => {
  // Container Items
  const containerItems = [0, 1, 2, 3, 4, 5];
  return (
    <div className="w-full flex flex-col items-center justify-start gap-4 py-4">
      {/* Container Info  */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-3 xl:gap-5">
        {/* Col 1  */}
        <div className="w-full bg-white-zircon rounded-md px-3 lg:px-4 py-3  lg:py-4">
          <div className="w-full flex items-center justify-between gap-2">
            <Typography.Label
              text={`Container ${containerNumber}:`}
              additionalStyles="font-medium text-black-main"
            />
            <Typography.Label
              text="20230345654345"
              additionalStyles="font-medium text-gray-storm"
            />
          </div>
        </div>
        {/* Col 2  */}
        <div className="w-full bg-white-zircon rounded-md px-3 lg:px-4 py-3 lg:py-4">
          <div className="w-full flex items-center justify-between gap-2">
            <Typography.Label
              text="Scanned Lines:"
              additionalStyles="font-medium text-black-main"
            />
            <Typography.Label text="2" additionalStyles="font-medium text-gray-storm" />
          </div>
        </div>
        {/* Col 3 */}
        <div className="w-full bg-white-zircon rounded-md px-3 lg:px-4 py-3 lg:py-4">
          <div className="w-full flex items-center justify-between gap-2">
            <Typography.Label text="Status:" additionalStyles="font-medium text-black-main" />
            <Typography.Label text="Open" additionalStyles="font-medium text-gray-storm" />
          </div>
        </div>
      </div>
      <ScrollArea type="always" scrollbarSize={4} className="w-full">
        <div className="w-full min-w-[750px] flex flex-col items-center justify-start ">
          {/* Table Head  */}
          <div className="w-full grid grid-cols-4 gap-4 px-4 border-[1px] border-solid border-white-zircon bg-white-zircon py-4 rounded-t-md">
            <Typography.Label text="Item ID" additionalStyles={`font-medium text-blue-riverbed`} />
            <Typography.Label text="Quantity" additionalStyles={`font-medium text-blue-riverbed`} />
            <Typography.Label
              text="Passed Quantity"
              additionalStyles={`font-medium text-blue-riverbed`}
            />
            <Typography.Label
              text="Failed Quantity"
              additionalStyles={`font-medium text-blue-riverbed`}
            />
          </div>
          {/* Table Body  */}
          <div className="w-full flex flex-col items-center justify-startrounded-b-md">
            {containerItems.map((item, index) => (
              <div
                key={index}
                className={`w-full grid grid-cols-4 gap-4 px-4 py-4 border-[1px] border-solid border-gray-amour border-t-0 ${
                  index + 1 == containerItems.length && 'rounded-b-md'
                }`}
              >
                {/* Item Id  */}
                <Typography.Label
                  text="DT3000000_1"
                  additionalStyles="font-medium w-full text-left text-black-mirage"
                />
                {/* Quantity  */}
                <Typography.Label
                  text="4"
                  additionalStyles="font-medium w-full text-left text-black-mirage"
                />
                {/* Passed Quantity */}
                <Typography.Label
                  text="2"
                  additionalStyles="font-medium w-full text-left text-black-mirage"
                />
                {/* Failed Quantity */}
                <Typography.Label
                  text="0"
                  additionalStyles="font-medium w-full text-left text-black-mirage"
                />
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>
      <Pagination />
    </div>
  );
};

export default Container;
