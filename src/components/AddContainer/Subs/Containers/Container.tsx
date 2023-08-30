import React from 'react';
import Typography from '../../../Shared/Typography';
import Pagination from '../../../Shared/Pagination';
import { NumberInput } from '@mantine/core';
import NextImage from '../../../Shared/NextImage';

interface Props {
  containerNumber: string;
}

const Container: React.FC<Props> = ({ containerNumber }) => {
  // Container Items
  // console.log(`active: ${containerNumber}`);

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
      <div className="w-full flex flex-col items-center justify-start ">
        {[0, 1].map((item, index) => (
          <div
            key={index}
            className="w-full border-b-2 border-gray-amour py-3 md:py-[12px] lg:py-[6px] grid grid-col-1 md:grid-cols-2 lg:grid-cols-[1fr_3fr_3fr_3fr] gap-[6px] xl:gap-3"
          >
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
              <div className="w-full flex items-start justify-between gap-2">
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
                <NumberInput
                  placeholder="0"
                  radius="md"
                  size="md"
                  type="number"
                  hideControls
                  classNames={{
                    wrapper: '  text-gray-storm',
                    input:
                      'px-2 border-2 max-w-[80px] border-solid bg-white-zircon bg-opacity-0 border-gray-storm focus:outline-0 focus:border-gray-storm text-base h-[20px] min-h-[27px] font-normal rounded text-gray-storm placeholder:text-gray-storm !font-medium placeholder:font-medium',
                  }}
                />
              </div>
              <div className="w-full flex items-center justify-between gap-2">
                <Typography.Label
                  text="Failed  Qty"
                  additionalStyles="font-medium text-black-main"
                />
                <NumberInput
                  placeholder="0"
                  radius="md"
                  size="md"
                  type="number"
                  hideControls
                  classNames={{
                    wrapper: '  text-gray-storm',
                    input:
                      'px-2 border-2 max-w-[80px] border-solid bg-white-zircon bg-opacity-0 border-gray-storm focus:outline-0 focus:border-gray-storm text-base h-[20px] min-h-[27px] font-normal rounded text-gray-storm placeholder:text-gray-storm !font-medium placeholder:font-medium',
                  }}
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
