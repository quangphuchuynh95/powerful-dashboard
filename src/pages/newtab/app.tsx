import React from 'react';
import { FC } from 'react';
import { AppShell, Header, MantineProvider, MantineThemeOverride, Navbar, Text } from '@mantine/core';
import { useIsDarkmode } from '../../hooks/use-is-darkmode';
import { TopLinks } from './partials/top-links/top-links';
import { Main } from './partials/main/main';

export const App: FC = () => {
  return (
    <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
      <AppShell
        padding="xs"
        header={<TopLinks />}
        navbar={<Navbar width={{ base: 300 }} height="100%" p="xs">{/* Navbar content */}</Navbar>}
        styles={(theme) => ({
          main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
        })}
      >
        <Main />
      </AppShell>
    </MantineProvider>
  )
}

App.displayName = 'App'