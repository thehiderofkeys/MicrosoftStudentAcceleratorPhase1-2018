import {AppBar,Button, IconButton, Toolbar} from '@material-ui/core/';
import HomeIcon from '@material-ui/icons/Home';
import * as React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.StatelessComponent<{}> = () => {
    return (
        <AppBar position="static">
            <Toolbar className="Toolbar">
                <Link to="/" >
                <IconButton>
                    <HomeIcon/>
                </IconButton>
                </Link>
                <Link to="/FirstComponent">
                    <Button style={{color: "white"}} >FirstComponent</Button>
                </Link>
            </Toolbar>
        </AppBar>
    );
}