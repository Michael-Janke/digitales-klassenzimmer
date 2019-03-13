import React from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';    
import Delete from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { resetClipboard } from './redux/actions/socket-send';
import ConfirmDialog from './helper/confirmDialog';
import LayoutMenu from './layoutOptions/layoutMenu';

const styles = {
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    flexBuffer: {
      flex: 1
    },
};

const ConnectionText = connect(({socket}) => ({connected: socket.connected}))(
  ({connected}) => connected ? "" : "- Verbindung wird hergestellt"
);


class MenuAppBar extends React.Component {

  state = {
    confirm: false
  }

  reset = () => {
    this.setState({confirm: true});
  };

  onResetConfirm = (confirmed) => {
    this.setState({confirm: false});
    if(confirmed) {
      this.props.reset();
    }
  };
  
  render() {
    const { classes, teacher } = this.props;

    return (
      <AppBar position="static">
        <Toolbar className="app-bar">
          <Typography variant="h6">
            Digitales Klassenzimmer <ConnectionText />
          </Typography>
          <div className={classes.flexBuffer}> </div>
          <LayoutMenu />
          <Tooltip title= {"Vollbildmodus" + (this.props.fullscreen ? "verlassen" : "öffnen")}>
            <IconButton onClick={this.props.onToggleFullscreen} >
              {this.props.fullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
            </IconButton>
          </Tooltip>
          {teacher && 
            <Tooltip title="Klassenzimmer zurücksetzen">
              <IconButton onClick={this.reset} >
                <Delete />
              </IconButton>
            </Tooltip>
          }
        </Toolbar>
        <ConfirmDialog 
            open = {this.state.confirm}
            title = "Klassenzimmer zurücksetzen?"
            onClose = {this.onResetConfirm}
          />
      </AppBar>
    );
  }
}

MenuAppBar = withStyles(styles)(MenuAppBar);
MenuAppBar = connect(({me}) => ({
  teacher: me.role === "teacher"
}), (dispatch) => ({
  reset: () => dispatch(resetClipboard())
}))(MenuAppBar);
export default MenuAppBar;

