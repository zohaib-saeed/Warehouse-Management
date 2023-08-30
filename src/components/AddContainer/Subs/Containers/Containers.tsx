import React, { useEffect, useState } from 'react';
import { Badge, Tabs, useMantineTheme, ScrollArea } from '@mantine/core';

import Pagination from '../../../Shared/Pagination';
import Wrapper from '../../../Shared/Wrapper';
import Typography from '../../../Shared/Typography';
import Container from './Container';

interface Props {
  containers: string[];
  // setContainers: React.Dispatch<React.SetStateAction<string[]>>
}

const Containers: React.FC<Props> = ({ containers }) => {
  // Mantine Theme
  const theme = useMantineTheme();
  // States
  const [activeTab, setActiveTab] = useState<string | null>('1');

  return (
    <Wrapper styles="pt-1 bg-white-main rounded-md flex-col items-center justify-start gap-2 ">
      <div className="w-full flex items-center justify-between gap-4">
        <Typography.PS text="Containers" additionalStyles="font-bold text-left text-primary" />
        <Typography.PXS
          text={`Total Containers: ${containers.length}`}
          additionalStyles="font-semibold text-black-mirage text-right"
        />
      </div>
      <Tabs
        value={activeTab}
        onTabChange={setActiveTab}
        className="w-full"
        styles={(theme) => ({
          tab: {
            '&[data-active=true]': {
              color: theme.colors.white[0],
              backgroundColor: ` ${theme.colors.primary[0]}`,
              '&:hover': {
                color: theme.colors.white[0],
                backgroundColor: ` ${theme.colors.primary[0]}`,
              },
            },
          },
        })}
        classNames={{
          tab: 'hover:bg-gray-amour rounded bg-gray-amour hover:border-b-0 font-bold text-primary',
        }}
      >
        {/* <ScrollArea type="always" className="w-full" scrollbarSize={4}> */}
        <Tabs.List className="pb-2  border-b-[1px] border-gray-amour gap-2 w-fit ">
          {containers.map((item, index) => (
            <Tabs.Tab key={index} value={`${index + 1}`}>
              {item} <Badge className="bg-secondary text-white-main">2</Badge>
            </Tabs.Tab>
          ))}
        </Tabs.List>
        {/* </ScrollArea> */}
        {containers.map((item, index) => {
          return (
            <Tabs.Panel key={index} value={`${index + 1}`}>
              <Container containerNumber={`${index + 1}`} />
            </Tabs.Panel>
          );
        })}
      </Tabs>
    </Wrapper>
  );
};

export default Containers;
