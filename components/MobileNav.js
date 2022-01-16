import React, { useState } from 'react';
import { AppBar, Toolbar } from '@mui/material';
import Link from 'next/link';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { List, ListItem, ListItemText, Divider } from '@mui/material';
import navStyles from '../styles/Nav.module.scss';
import { useRouter } from 'next/router';
import Typography from '@mui/material/Typography';

const links = [
  { text: 'Home', path: '/' },
  { text: 'Top Ten', path: '/topten' },
];

const MobileNav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();
  return (
    <>
      <AppBar style={{ background: '#2E3B55' }}>
        <Toolbar disableGutters>
          <IconButton onClick={() => setDrawerOpen(true)}>
            <MenuIcon style={{ fill: 'white' }} />
          </IconButton>
          <Typography variant='h6' style={{ paddingLeft: '5%' }}>
            <Link href='/'>RB.XYZ</Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        open={drawerOpen}
        anchor='left'
        onClose={() => setDrawerOpen(false)}
      >
        <List style={{ background: '#2E3B55', height: '100%' }}>
          <ListItem>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <MenuIcon style={{ fill: 'white' }} />
            </IconButton>
          </ListItem>
          {links.map((_link, idx) => (
            <ListItem
              sx={{
                margin: '0 50px 10px 10px',
                fontSize: '24px',
                color: 'white',
              }}
              key={idx}
            >
              <Link href={_link.path}>
                <a
                  className={
                    router.pathname == _link.path ? navStyles.active : ''
                  }
                >
                  {_link.text}
                </a>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default MobileNav;
