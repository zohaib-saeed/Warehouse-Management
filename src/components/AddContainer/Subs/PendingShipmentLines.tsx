import React from 'react';
import { Carousel } from '@mantine/carousel';
import { rem, Badge } from '@mantine/core';
import { FiChevronRight as IconNext, FiChevronLeft as IconPrev } from 'react-icons/fi';

import Typography from '../../Shared/Typography';

const PendingShipmentLines: React.FC = () => {
  const NextIcon = () => (
    <div className="p-1 rounded-lg border-2 border-solid border-primary flex items-center justify-center">
      <IconNext className="w-[17px] h-[17px] text-primary" />
    </div>
  );

  const PrevIcon = () => (
    <div className="p-1 rounded-lg border-2 border-solid border-primary flex items-center justify-center">
      <IconPrev className="w-[17px] h-[17px] text-primary " />
    </div>
  );

  return (
    <>
      <div className="w-full flex flex-col items-center justify-start gap-2">
        <div className="w-full flex items-center justify-start gap-1">
          <Typography.PS
            text="Pending Shipment Lines"
            additionalStyles="font-bold text-left  text-primary"
          />
          <Badge className="bg-secondary text-white-main">4</Badge>
        </div>
        <div className="w-full -bottom-20 mb-8 flex flex-col items-center justify-start">
          <Carousel
            withIndicators={true}
            withControls
            slidesToScroll={1}
            align="start"
            className="w-full "
            loop
            nextControlIcon={<NextIcon />}
            previousControlIcon={<PrevIcon />}
            breakpoints={[
              { maxWidth: 'sm', slideSize: '100%', slideGap: 'xs' },
              { minWidth: 'sm', slideSize: '100%', slideGap: 'xs' },
              { minWidth: 'md', slideSize: '100%', slideGap: 'xs' },
              { minWidth: 'lg', slideSize: '45%', slideGap: 'sm' },
              { minWidth: 'xl', slideSize: '33.33%', slideGap: 'sm' },
            ]}
            classNames={{
              controls: ' -bottom-11 top-full ',
              control: 'border-0 shadow-0 rounded-lg',
              indicators: ' top-[113%]  -bottom-[70px]',
              indicator: 'bg-primary',
            }}
            styles={{
              indicator: {
                width: rem(12),
                height: rem(4),
                transition: 'width 250ms ease',

                '&[data-active]': {
                  width: rem(40),
                },
              },
            }}
          >
            {[0, 1, 2, 3].map((item, index) => (
              <Carousel.Slide key={index}>
                <div
                  key={index}
                  className="w-full px-4 py-1 flex flex-col items-center justify-start gap-1 bg-white-zircon rounded-md "
                >
                  {/* ===> Item Id */}
                  <div className="w-full flex items-center justify-between gap-2">
                    <Typography.Label
                      text="Item ID:"
                      additionalStyles="font-medium text-black-main"
                    />
                    <Typography.Label
                      text="JD000000004_1"
                      additionalStyles="font-medium text-gray-storm"
                    />
                  </div>
                  {/* ===> Desc */}
                  <div className="w-full flex items-start justify-between gap-2">
                    <Typography.Label text="Desc:" additionalStyles="font-medium text-black-main" />
                    <Typography.Label
                      text="KAPPA Polo Neck T-Shirt Black "
                      additionalStyles="font-medium text-gray-storm flex-1 text-right"
                    />
                  </div>
                  {/* ===> Color  */}
                  <div className="w-full flex items-center justify-between gap-2">
                    <Typography.Label
                      text="Color:"
                      additionalStyles="font-medium text-black-main"
                    />
                    <Typography.Label text="Red" additionalStyles="font-medium text-gray-storm" />
                  </div>
                  {/* ===> Size  */}
                  <div className="w-full flex items-center justify-between gap-2">
                    <Typography.Label text="Size:" additionalStyles="font-medium text-black-main" />
                    <Typography.Label text="L" additionalStyles="font-medium text-gray-storm" />
                  </div>
                  {/* ===> Current Quantity  */}
                  <div className="w-full flex items-center justify-between gap-2">
                    <Typography.Label
                      text="Current Quantity:"
                      additionalStyles="font-medium text-black-main"
                    />
                    <Typography.Label text="3" additionalStyles="font-medium text-gray-storm" />
                  </div>
                  {/* ===> Cancel Quantity  */}
                  <div className="w-full flex items-center justify-between gap-2">
                    <Typography.Label
                      text="Cancel Quantity:"
                      additionalStyles="font-medium text-black-main"
                    />
                    <Typography.Label text="0" additionalStyles="font-medium text-gray-storm" />
                  </div>
                  {/* ===> Status  */}
                  <div className="w-full flex items-center justify-between gap-2">
                    <Typography.Label
                      text="Status:"
                      additionalStyles="font-medium text-black-main"
                    />
                    <Typography.Label
                      text="Ready To Pack"
                      additionalStyles="font-medium text-gray-storm"
                    />
                  </div>
                </div>
              </Carousel.Slide>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default PendingShipmentLines;
