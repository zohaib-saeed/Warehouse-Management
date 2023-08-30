import React from 'react';
import Typography from '../../../Shared/Typography';
import Pagination from '../../../Shared/Pagination';
import { ScrollArea } from '@mantine/core';
import NextImage from '../../../Shared/NextImage';

interface Props {
  containerNumber: string;
}

const Container: React.FC<Props> = ({ containerNumber }) => {
  // Container Items
  const containerItems = [0, 1];
  return (
    <div className="w-full flex flex-col items-center justify-start gap-2 py-2">
      {/* Container Info  */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-3 xl:gap-5">
        {/* Col 1  */}
        <div className="w-full bg-white-zircon rounded-md px-3 lg:px-4 py-1">
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
        <div className="w-full bg-white-zircon rounded-md px-3 lg:px-4 py-1">
          <div className="w-full flex items-center justify-between gap-2">
            <Typography.Label
              text="Scanned Lines:"
              additionalStyles="font-medium text-black-main"
            />
            <Typography.Label text="2" additionalStyles="font-medium text-gray-storm" />
          </div>
        </div>
        {/* Col 3 */}
        <div className="w-full bg-white-zircon rounded-md px-3 lg:px-4 py-1">
          <div className="w-full flex items-center justify-between gap-2">
            <Typography.Label text="Status:" additionalStyles="font-medium text-black-main" />
            <Typography.Label text="Open" additionalStyles="font-medium text-gray-storm" />
          </div>
        </div>
      </div>
      {/* Cards  */}
      <div className="w-full flex flex-col items-center justify-start gap-1">
        {[0, 1].map((item, index) => (
          <div key={index} className="w-full grid grid-cols-[1fr_3fr_3fr_3fr] gap-3">
            {/* Col 1 */}
            <NextImage
              src="/images/sample.png"
              alt=""
              styles="w-[100px] h-[100px] rounded overflow-hidden"
            />
            {/* Col 2  */}
            <div className="w-full bg-white-zircon rounded-md px-3 lg:px-4 py-1 flex flex-col items-start justify-start gap-1">
              <div className="w-full flex items-center justify-between gap-2">
                <Typography.Label text="Item ID:" additionalStyles="font-medium text-black-main" />
                <Typography.Label
                  text="EJ_0000456kl54"
                  additionalStyles="font-medium text-gray-storm  text-right flex-1"
                />
              </div>
              <div className="w-full flex items-center justify-between gap-2">
                <Typography.Label text="Barcode:" additionalStyles="font-medium text-black-main" />
                <Typography.Label
                  text="0000000000"
                  additionalStyles="font-medium text-gray-storm  text-right flex-1"
                />
              </div>
              <div className="w-full flex items-center justify-between gap-2">
                <Typography.Label text="Desc:" additionalStyles="font-medium text-black-main" />
                <Typography.Label
                  text="Black Cotton T-shirt perfect for summer"
                  additionalStyles="font-medium text-gray-storm  text-right flex-1"
                />
              </div>
              <div className="w-full flex items-center justify-between gap-2">
                <Typography.Label text="Color:" additionalStyles="font-medium text-black-main" />
                <Typography.Label
                  text="Black"
                  additionalStyles="font-medium text-gray-storm  text-right flex-1"
                />
              </div>
              <div className="w-full flex items-center justify-between gap-2">
                <Typography.Label text="Size:" additionalStyles="font-medium text-black-main" />
                <Typography.Label
                  text="1114"
                  additionalStyles="font-medium text-gray-storm  text-right flex-1"
                />
              </div>
            </div>
            {/* Col 3  */}
            <div className="w-full bg-white-zircon rounded-md px-3 lg:px-4 py-1 flex flex-col items-start justify-start gap-1">
              <div className="w-full flex items-center justify-between gap-2">
                <Typography.Label text="Contains:" additionalStyles="font-medium text-black-main" />
                <Typography.Label
                  text="Apparel"
                  additionalStyles="font-medium text-gray-storm  text-right flex-1"
                />
              </div>
              <div className="w-full flex items-center justify-between gap-2">
                <Typography.Label text="MRP:" additionalStyles="font-medium text-black-main" />
                <Typography.Label
                  text="67"
                  additionalStyles="font-medium text-gray-storm  text-right flex-1"
                />
              </div>
              <div className="w-full flex items-center justify-between gap-2">
                <Typography.Label
                  text="Original Qty:"
                  additionalStyles="font-medium text-black-main"
                />
                <Typography.Label
                  text="2"
                  additionalStyles="font-medium text-gray-storm  text-right flex-1"
                />
              </div>
              <div className="w-full flex items-center justify-between gap-2">
                <Typography.Label
                  text="Current Qty:"
                  additionalStyles="font-medium text-black-main"
                />
                <Typography.Label
                  text="2"
                  additionalStyles="font-medium text-gray-storm  text-right flex-1"
                />
              </div>
            </div>
            {/* Col 4 */}
            <div className="w-full bg-white-zircon rounded-md px-3 lg:px-4 py-1 flex flex-col items-start justify-start gap-1">
              <div className="w-full flex items-center justify-between gap-2">
                <Typography.Label
                  text="Qty to Pack:"
                  additionalStyles="font-medium text-black-main"
                />
                <Typography.Label
                  text="1"
                  additionalStyles="font-medium text-gray-storm  text-right flex-1"
                />
              </div>
              <div className="w-full flex items-center justify-between gap-2">
                <Typography.Label text="Reason:" additionalStyles="font-medium text-black-main" />
                <Typography.Label
                  text="Shipment"
                  additionalStyles="font-medium text-gray-storm  text-right flex-1"
                />
              </div>
              <div className="w-full flex items-center justify-between gap-2">
                <Typography.Label
                  text="Passed  Qty"
                  additionalStyles="font-medium text-black-main"
                />
                <Typography.Label
                  text="1"
                  additionalStyles="font-medium text-gray-storm  text-right flex-1"
                />
              </div>
              <div className="w-full flex items-center justify-between gap-2">
                <Typography.Label
                  text="Failed  Qty"
                  additionalStyles="font-medium text-black-main"
                />
                <Typography.Label
                  text="1"
                  additionalStyles="font-medium text-gray-storm  text-right flex-1"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Table  */}

      {/* <Pagination /> */}
    </div>
  );
};

export default Container;
