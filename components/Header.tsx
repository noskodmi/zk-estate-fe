import * as React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';

export const Header: React.FC = () => {
  const router = useRouter();
  return (
    <AppBar>
      <Box maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ justifyContent: 'space-between', px: '1rem' }}
        >
          <Button onClick={() => router.push('/')}>
            <Image
              src="/logo.svg"
              width={50}
              height={50}
              alt="logo"
            />
          </Button>
          <ConnectButton />
        </Toolbar>
      </Box>
    </AppBar>
  );
};
