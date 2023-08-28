import React from 'react';
import Typography from '../../Shared/Typography';

const ShippingDetails: React.FC = () => {
  return (
    <div className="flex-col w-full flex items-center justify-start bg-white-main  rounded-md overflow-hidden">
      {/* Heading  */}
      <div className="w-full flex items-center justify-start px-3 py-3 mdl:py-4 border-b-[1px] border-gray-amour">
        <Typography.PS
          text="Shipping Details"
          additionalStyles="font-bold text-left w-full text-primary"
        />
      </div>
      {/* Details  */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-3 xl:gap-5 px-3 py-3 mdl:py-5 ">
        {/* Col 1  */}
        <div className="w-full px-4 py-4 flex flex-col items-center justify-start gap-3 bg-white-zircon rounded-md ">
          {/* ===> Shipment Number  */}
          <div className="w-full flex items-center justify-between gap-2">
            <Typography.Label text="Shipment No:" additionalStyles="font-medium text-black-main" />
            <Typography.Label text="JD000000004_1" additionalStyles="font-medium text-gray-storm" />
          </div>
          {/* ===> Order Number */}
          <div className="w-full flex items-center justify-between gap-2">
            <Typography.Label text="Order No:" additionalStyles="font-medium text-black-main" />
            <Typography.Label text="000000004_1" additionalStyles="font-medium text-gray-storm" />
          </div>
          {/* ===> Order From  */}
          <div className="w-full flex items-center justify-between gap-2">
            <Typography.Label text="Order From:" additionalStyles="font-medium text-black-main" />
            <Typography.Label text="LIFESTYLE" additionalStyles="font-medium text-gray-storm" />
          </div>
          {/* ===> Status Desc  */}
          <div className="w-full flex items-center justify-between gap-2">
            <Typography.Label text="Status Desc:" additionalStyles="font-medium text-black-main" />
            <Typography.Label text="Ready To Pack" additionalStyles="font-medium text-gray-storm" />
          </div>
        </div>
        {/* Col 2  */}
        <div className="w-full px-4 py-4 flex flex-col items-center justify-start gap-3 bg-white-zircon rounded-md ">
          {/* ===> Concept  */}
          <div className="w-full flex items-center justify-between gap-2">
            <Typography.Label text="Concept:" additionalStyles="font-medium text-black-main" />
            <Typography.Label text="LIFESTYLE" additionalStyles="font-medium text-gray-storm" />
          </div>
          {/* ===> Contains*/}
          <div className="w-full flex items-center justify-between gap-2">
            <Typography.Label text="Contains:" additionalStyles="font-medium text-black-main" />
            <Typography.Label text="Apparel" additionalStyles="font-medium text-gray-storm" />
          </div>
          {/* ===> Req Del Date */}
          <div className="w-full flex items-center justify-between gap-2">
            <Typography.Label text="Req Del Date:" additionalStyles="font-medium text-black-main" />
            <Typography.Label
              text="2023-03-03T04:00:36"
              additionalStyles="font-medium text-gray-storm"
            />
          </div>
          {/* ===> CNC  */}
          <div className="w-full flex items-center justify-between gap-2">
            <Typography.Label text="CNC:" additionalStyles="font-medium text-black-main" />
            <Typography.Label text="N" additionalStyles="font-medium text-gray-storm" />
          </div>
        </div>
        {/* Col 3  */}
        <div className="w-full px-4 py-4 flex flex-col items-center justify-start gap-3 bg-white-zircon rounded-md ">
          {/* ===> Location Ref  */}
          <div className="w-full flex items-center justify-between gap-2">
            <Typography.Label text="Location Ref:" additionalStyles="font-medium text-black-main" />
            <Typography.Label
              text="elc_2345 North"
              additionalStyles="font-medium text-gray-storm"
            />
          </div>
          {/* ===>Delivery Mode*/}
          <div className="w-full flex items-center justify-between gap-2">
            <Typography.Label
              text="Delivery Mode:"
              additionalStyles="font-medium text-black-main"
            />
            <Typography.Label text="Air Standard" additionalStyles="font-medium text-gray-storm" />
          </div>
          {/* ===> Total Quantity */}
          <div className="w-full flex items-center justify-between gap-2">
            <Typography.Label
              text="Total Quantity:"
              additionalStyles="font-medium text-black-main"
            />
            <Typography.Label text="4" additionalStyles="font-medium text-gray-storm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingDetails;
