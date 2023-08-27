import { Pagination as MantinePagination } from '@mantine/core';
import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const Pagination: React.FC = () => {
  return (
    <MantinePagination
      nextIcon={() => (
        <div className=" h-full flex items-center justify-center gap-1 bg-white-main rounded-md px-[6px] xxs:px-2">
          <p className="font-medium sm:inline-block hidden">Next</p>
          <AiOutlineArrowRight className="h-[16px] w-[16px] text-black-main" />
        </div>
      )}
      previousIcon={() => (
        <div className=" h-full flex items-center justify-center gap-1 bg-white-main rounded-md px-[6px] xxs:px-2">
          <AiOutlineArrowLeft className="h-[16px] w-[16px] text-black-main" />
          <p className="font-medium sm:inline-block hidden">Previous</p>
        </div>
      )}
      total={10}
      radius="md"
      styles={(theme) => ({
        control: {
          '&:hover': {
            backgroundColor: `${theme.colors.transparent[0]} !important`,
          },
          '&[data-active=true]': {
            backgroundColor: theme.colors.primary[0],
            color: theme.colors.white[0],
          },
          '&[data-disabled]': {
            backgroundColor: `${theme.colors.white[0]} !important`,
            opacity: '1',
          },
          '&[data-active=true]:hover': {
            backgroundColor: `${theme.colors.primary[0]} !important`,
            color: `${theme.colors.white[0]} !important`,
          },
        },
      })}
      className="w-full sm:w-auto flex items-center justify-center sm:justify-end gap-[2px] xs:gap-1 sm:gap-[10px]"
      classNames={{
        control:
          'text-black-main border-gray-santa border-2 border-solid text-sm  xxs:min-w-[2rem] min-w-[2rem]',
      }}
    />
  );
};

export default Pagination;
