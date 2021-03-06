import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {SearchWrapper, Root} from  "./styled"

export const Header = () => {

  return (
    <Root>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap color="inherit">
            Material-UI
          </Typography>
          <SearchWrapper>
            <div >
              <SearchIcon />
            </div>
            <InputBase
              style={{marginLeft: "10px"}}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </SearchWrapper>
        </Toolbar>
      </AppBar>
    </Root>
  )
}