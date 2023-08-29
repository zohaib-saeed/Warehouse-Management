import React from 'react';

import Typography from '../../Shared/Typography';
import Wrapper from '../../Shared/Wrapper';

const PendingShipmentLines: React.FC = () => {
  return (
    <Wrapper
      styles=" py-3 mdl:py-4 grid-cols-[0.5fr_1.5fr] gap-6 bg-white-main rounded-md"
      layout="grid"
    >
      <div className="flex flex-col items-center justify-start gap-4">
        <Typography.PS
          text="Pending Shipment Lines"
          additionalStyles="font-bold text-left w-full text-primary"
        />
        {[0, 1].map((item, index) => (
          <div
            key={index}
            className="w-full px-4 py-4 flex flex-col items-center justify-start gap-3 bg-white-zircon rounded-md "
          >
            {/* ===> Item Id */}
            <div className="w-full flex items-center justify-between gap-2">
              <Typography.Label text="Item ID:" additionalStyles="font-medium text-black-main" />
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
              <Typography.Label text="Color:" additionalStyles="font-medium text-black-main" />
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
              <Typography.Label text="Status:" additionalStyles="font-medium text-black-main" />
              <Typography.Label
                text="Ready To Pack"
                additionalStyles="font-medium text-gray-storm"
              />
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default PendingShipmentLines;
