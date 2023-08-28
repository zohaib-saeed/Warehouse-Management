import React from 'react';
import { Tooltip, Modal, ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { RiCloseFill as CloseIcon } from 'react-icons/ri';

import Wrapper from '../../Shared/Wrapper';
import Typography from '../../Shared/Typography';
import NextImage from '../../Shared/NextImage';
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

  // Toggle Modal
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <React.Fragment>
      <div className="w-full flex flex-col items-center justify-start ">
        {/* Heading  */}
        <Wrapper styles="items-center justify-start py-3 mdl:py-4 bg-white-main rounded-md">
          <Typography.PS
            text="Shipment Lines"
            additionalStyles="font-bold text-left w-full text-primary"
          />
        </Wrapper>
        {/* Lines Table  */}
        <ScrollArea className="w-full " type="always" scrollbarSize={4}>
          <div className="w-full min-w-[1050px] flex flex-col items-center justify-start">
            {/* Header  */}
            <div className="w-full py-3 mdl:py-4 px-3  mdl:px-4 grid grid-cols-[1fr_1.6fr_2.5fr_1fr_1fr_1fr_0.8fr_0.8fr_0.8fr] gap-2 mdl:gap-3">
              {tableHeader.map((item, index) => (
                <Typography.Label
                  key={index}
                  text={item}
                  additionalStyles={`font-medium text-blue-riverbed`}
                />
              ))}
            </div>
            {/* Body  */}
            <Wrapper styles="flex-col items-center justify-start bg-white-main rounded-t-md">
              {[0, 1, 2, 3, 4].map((item, index) => (
                <div
                  key={index}
                  className="w-full py-3 mdl:py-4 border-b-[1px] border-gray-amour grid grid-cols-[1fr_1.6fr_2.5fr_1fr_1fr_1fr_0.8fr_0.8fr_0.8fr] gap-2 mdl:gap-3 items-center"
                >
                  {/* Image  */}
                  <NextImage
                    onClick={open}
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
                  <Tooltip
                    label="KAPPA Polo Nect T-Shirt"
                    className="bg-black-main text-white-main"
                  >
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
            </Wrapper>
          </div>
        </ScrollArea>
        {/* Pagination  */}
        <div className="w-full flex items-center justify-center bg-white-main rounded-b-md py-6">
          <Pagination />
        </div>
      </div>
      <Modal
        centered
        opened={opened}
        onClose={close}
        withCloseButton={false}
        title=""
        className="w-[370px]"
      >
        <div className="w-full flex flex-col items-center justify-start gap-6 pb-4">
          <CloseIcon
            onClick={close}
            className="text-gray-storm text-[24px] ml-auto cursor-pointer"
          />
          <NextImage
            src="/images/sample.jpg"
            alt=""
            styles="object-cover w-[350px] h-[350px] rounded-md overflow-hidden"
          />
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default ShipmentLines;
