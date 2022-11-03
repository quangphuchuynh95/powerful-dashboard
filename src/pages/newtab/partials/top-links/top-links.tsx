import React, { FunctionComponent, ReactNode } from 'react';
import { Avatar, Group, Header, UnstyledButton } from '@mantine/core';
import { IconBrandGithub, IconBrandGitlab, IconBrandTrello, IconBrandGmail, IconBrandGooglePhotos, IconBrandGoogle, IconBrandGoogleDrive, IconCalendar } from '@tabler/icons'

export interface TopLinksProps {

}

const LINKS: { url: string, icon: ReactNode }[] = [
  {
    url: 'https://github.com',
    icon: <IconBrandGithub />
  },
  {
    url: 'https://code.scaleflex.cloud',
    icon: <IconBrandGitlab />
  },
  {
    url: 'https://scaban.scaleflex.com',
    icon: <IconBrandTrello />
  },
  {
    url: 'https://google.com',
    icon: <IconBrandGoogle />
  },
  {
    url: 'https://drive.google.com',
    icon: <IconBrandGoogleDrive />
  },
  {
    url: 'https://mail.google.com',
    icon: <IconBrandGmail />
  },
  {
    url: 'https://photos.google.com',
    icon: <IconBrandGooglePhotos />
  },
  {
    url: 'https://calendar.google.com',
    icon: <IconCalendar />
  },
]

export const TopLinks: FunctionComponent<TopLinksProps> = ({}) => {
  console.log(1)
  return (<Header height={60} p="xs">
      <Group spacing="md">
        {
          LINKS.map(({ url, icon }) => (
            <UnstyledButton onClick={() => {
              window.location.href = url
            }}>
              <Avatar color="pink">
                {icon}
              </Avatar>
            </UnstyledButton>
          ))
        }
      </Group>
    </Header>
  )
}

TopLinks.displayName = 'TopLinks'