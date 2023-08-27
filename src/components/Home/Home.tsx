import React from 'react';
import { Breadcrumbs, ActionIcon, Input } from '@mantine/core';
import { BsArrowLeft as ArrowLeft } from 'react-icons/bs';
import { AiOutlineScan as ScanIcon } from 'react-icons/ai';

import Wrapper from '../Shared/Wrapper';
import NextLink from '../Shared/NextLink';
import Typography from '../Shared/Typography';
import Buttons from '../Shared/Buttons';
import ShippingDetails from './Subs/ShippingDetails';

const Home: React.FC = () => {
  // Breadcrumbs
  const items = [
    { title: 'Home', href: '/' },
    { title: 'Pack', href: '/' },
  ].map((item, index) => (
    <NextLink href={item.href} key={index}>
      <Typography.PXS
        text={item.title}
        additionalStyles="text-primary font-medium hover:text-secondary"
      />
    </NextLink>
  ));

  //   Shipment Lines Table Header Items
  const tableHeader = [
    'Image',
    'Item ID',
    'Desc',
    'Color',
    'Size',
    'MRP',
    'Current Qty',
    'Packed Qty',
    'Cancel Qty',
  ];

  return (
    <Wrapper styles="flex-col items-center justify-start gap-7 bg-white-zircon py-6">
      {/* Top => Bread Crumbs + Back Button  */}
      <Wrapper styles="items-center justify-start gap-10 bg-white-main py-4 rounded-md">
        <ActionIcon variant="transparent">
          <ArrowLeft className="text-gray-storm text-[20px]" />
        </ActionIcon>
        <Breadcrumbs>{items}</Breadcrumbs>
      </Wrapper>
      {/* Search field + Scan button + Unpack + Close Pack */}
      <Wrapper styles="items-center justify-start gap-16 bg-white-main py-4 rounded-md">
        <div className="flex items-center justify-start gap-1">
          <Input
            icon={<ScanIcon className="w-[20px] h-[20px]" />}
            placeholder="Scan Item ID"
            radius="md"
            size="md"
            classNames={{
              wrapper: 'w-full max-w-[330px] min-w-[330px] text-gray-storm',
              input:
                'border-2 border-solid bg-white-zircon bg-opacity-0 border-gray-amour focus:outline-0 focus:border-gray-amour text-base h-[40px] min-h-[28px] font-medium rounded',
            }}
          />
          <Buttons.Filled
            text="Scan Item"
            styles="text-white-main bg-primary h-[40px] rounded hover:bg-opacity-90  transition-all duration-300"
          />
        </div>
        <div className="flex items-center justify-start gap-4">
          <Buttons.Filled text="Unpack" styles="text-gray-storm bg-gray-amour rounded h-[40px]" />
          <Buttons.Filled
            text="Close Pack"
            styles="text-gray-storm bg-gray-amour rounded h-[40px]"
          />
        </div>
      </Wrapper>
      {/* Shipping Details  */}
      <ShippingDetails />
      {/* Shipment Lines  */}
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
          <div className="w-full py-4 px-3 grid grid-cols-[1fr_1fr_2.5fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-3">
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
            dd
          </Wrapper>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
