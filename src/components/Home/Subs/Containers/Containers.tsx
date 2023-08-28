import React from 'react';
import { Badge, Tabs, useMantineTheme } from '@mantine/core';

import Pagination from '../../../Shared/Pagination';
import Wrapper from '../../../Shared/Wrapper';
import Typography from '../../../Shared/Typography';
import Container from './Container';

const Containers: React.FC = () => {
  // Mantine Theme
  const theme = useMantineTheme();

  return (
    <Wrapper styles="pt-4 bg-white-main rounded-md flex-col items-center justify-start gap-4 ">
      <Typography.PS text="Containers" additionalStyles="font-bold text-left w-full text-primary" />
      <Typography.PXS
        text={`Total Containers: 2`}
        additionalStyles="font-semibold text-black-mirage text-left w-full "
      />
      <Tabs
        defaultValue="1"
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
        <Tabs.List className="pb-4 pt-2 border-b-[1px] border-gray-amour gap-2">
          <Tabs.Tab value="1">
            Container 1 <Badge className="bg-secondary text-white-main">2</Badge>
          </Tabs.Tab>
          <Tabs.Tab value="2">
            Container 2 <Badge className="bg-secondary text-white-main">2</Badge>
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="1">
          <Container containerNumber="1" />
        </Tabs.Panel>
        <Tabs.Panel value="2">
          <Container containerNumber="2" />
        </Tabs.Panel>
      </Tabs>
    </Wrapper>
  );
};

export default Containers;
