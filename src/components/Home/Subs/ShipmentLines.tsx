import React from 'react';
import Wrapper from '../../Shared/Wrapper';
import Typography from '../../Shared/Typography';
import NextImage from '../../Shared/NextImage';
import { Tooltip } from '@mantine/core';
import Pagination from '../../Shared/Pagination';

const ShipmentLines: React.FC = () => {
  //   Shipment Lines Table Header Items
  const tableHeader = [
    'Image',
    'Item ID',
    'Desc',
    'Color',
    'Size',
    'MRP',
    'Current',
    'Packed',
    'Cancel',
  ];

  return (
    <div className="w-full flex flex-col items-center justify-start ">
      {/* Heading  */}
      <Wrapper styles="items-center justify-start py-4 bg-white-main rounded-md">
        <Typography.PS
          text="Shipment Lines"
          additionalStyles="font-bold text-left w-full text-primary"
        />
      </Wrapper>
      {/* Lines Table  */}
      <div className="w-full flex flex-col items-center justify-start">
        {/* Header  */}
        <div className="w-full py-4 px-4 grid grid-cols-[1fr_1fr_2.5fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-3">
          {tableHeader.map((item, index) => (
            <Typography.Label
              key={index}
              text={item}
              additionalStyles={`font-medium text-blue-riverbed`}
            />
          ))}
        </div>
        {/* Body  */}
        <Wrapper styles="flex-col items-center justify-start bg-white-main rounded-md">
          {[0, 1, 2, 3, 4].map((item, index) => (
            <div
              key={index}
              className="w-full py-4 border-b-[1px] border-gray-amour grid grid-cols-[1fr_1fr_2.5fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-3 items-center"
            >
              {/* Image  */}
              <NextImage
                src="/images/sample.jpg"
                alt=""
                styles="w-[60px] h-[60px] object-cover rounded overflow-hidden cursor-pointer"
              />
              {/* Item Id  */}
              <Typography.Label
                text="DT3000000_1"
                additionalStyles="font-medium w-full text-left text-black-mirage"
              />
              {/* Desc  */}
              <Tooltip label="KAPPA Polo Nect T-Shirt" className="bg-black-main text-white-main">
                <Typography.Label
                  text="KAPPA Polo Nect T-Shirt"
                  additionalStyles="font-medium w-full text-left text-black-mirage truncate"
                />
              </Tooltip>
              {/* Color  */}
              <Typography.Label
                text="Black"
                additionalStyles="font-medium w-full text-left text-black-mirage truncate"
              />
              {/* Size  */}
              <Typography.Label
                text="3314"
                additionalStyles="font-medium w-full text-left text-black-mirage truncate"
              />
              {/* MRP  */}
              <Typography.Label
                text="699"
                additionalStyles="font-medium w-full text-left text-black-mirage truncate"
              />
              {/*Current */}
              <Typography.Label
                text="4"
                additionalStyles="font-medium w-full text-left text-black-mirage truncate"
              />
              {/*Packed  */}
              <Typography.Label
                text="2"
                additionalStyles="font-medium w-full text-left text-black-mirage truncate"
              />
              {/* Cancel */}
              <Typography.Label
                text="0"
                additionalStyles="font-medium w-full text-left text-black-mirage truncate"
              />
            </div>
          ))}
          {/* Pagination  */}
          <div className="w-full flex items-center justify-center py-6">
            <Pagination />
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default ShipmentLines;
