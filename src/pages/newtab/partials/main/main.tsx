import React, { FunctionComponent } from 'react';
import { Box, Group, Input, Stack } from '@mantine/core';

interface MainProps {

}

export const Main: FunctionComponent<MainProps> = ({}) => {

  return (
    <Stack sx={{ height: '100%' }}>
      <Box p="xs">
        <Group>

        </Group>
      </Box>
      <Box sx={{ height: '1px', flexGrow: 1 }}>
        dsadsa
      </Box>
    </Stack>
  )
}

Main.displayName = 'Main'