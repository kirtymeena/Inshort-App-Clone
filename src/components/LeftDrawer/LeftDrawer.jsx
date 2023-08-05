/* eslint-disable react/prop-types */
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, useMediaQuery } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { categories } from '../../data/category';
// import { black } from '@mui/material/colors';
import PropTypes from 'prop-types';

TemporaryDrawer.prototype = {
    setCategory: PropTypes.func.isRequired
}

export default function TemporaryDrawer({ setCategory, category }) {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };


    const prefersDarkMode = useMediaQuery("(prefers-color-scheme:dark)");
    console.log(prefersDarkMode)

    const theme = React.useMemo(
        () => createTheme({
            palette: {
                mode: prefersDarkMode ? "dark" : "light",
            },
        }),
        [prefersDarkMode]
    );

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200, paddingLeft: "10px", paddingRight: "5px", paddingTop: "50px" }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <p style={{ paddingLeft: "30px", color: "#a3a3a3" }}>Categories</p>

            <List>
                <Divider />

                {categories.map((text) => (
                    <ListItem key={text} onClick={() => setCategory(text==="General"?"all":text)} style={{
                        backgroundColor: text === category ? "#71717a" : "", borderRadius: "4px"
                    }}>
                        <ListItemButton>
                            < ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))
                }
            </List >
        </Box >
    );

    return (
        <div>

            <React.Fragment>
                <Button onClick={toggleDrawer('left', true)}>
                    <MenuIcon sx={{ color: 'black' }} />
                </Button>
                <ThemeProvider theme={theme}>
                    <Drawer
                        anchor='left'
                        open={state['left']}
                        onClose={toggleDrawer('left', false)}
                    >
                        {list('left')}
                    </Drawer>
                </ThemeProvider>
            </React.Fragment>

        </div>
    );
}