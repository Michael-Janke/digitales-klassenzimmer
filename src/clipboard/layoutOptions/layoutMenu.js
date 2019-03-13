import React from 'react';
import { connect } from 'react-redux';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SvgIcon from '@material-ui/core/SvgIcon';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import layoutOptions from './index';
import { ReactComponent as LayoutIcon } from './split-browser.svg';
import { setBoardLayout } from '../redux/actions/socket-send';

class LayoutMenu extends React.PureComponent {
    state = {
      open: false,
    };
  
    handleClick = event => {
      this.setState({ menuEl: event.currentTarget, open:true });
    };
  
    handleClose = (key, layoutOption) => () => {
      this.setState({ open: false });
      if(layoutOption) {
        this.props.setBoardLayout({
          key,
          maxElements: layoutOption.maxElements
        });
      }
    };
  
    render() {
      const { open, menuEl } = this.state;
      return (
        <React.Fragment>
          <Menu
              anchorEl={menuEl}
              open={open}
              onClose={this.handleClose()}
            >
            {Object.keys(layoutOptions).map(opt => {
                const Svg = layoutOptions[opt].svg;
                return <MenuItem key={opt} onClick={this.handleClose(opt, layoutOptions[opt])}>
                        <ListItemIcon>
                          <SvgIcon>
                            <Svg />
                          </SvgIcon>
                        </ListItemIcon>
                        <ListItemText primaryTypographyProps={{variant: 'subtitle1'}} primary={layoutOptions[opt].text} />
                      </MenuItem>;
              })}
          </Menu>
          <Tooltip title="Layout der Arbeitsfläche ändern">
           <IconButton onClick={this.handleClick} >
              <SvgIcon>
                <LayoutIcon />
              </SvgIcon>
            </IconButton>
          </Tooltip>
        </React.Fragment>
      );
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
        setBoardLayout: (layout) => dispatch(setBoardLayout(layout)),
    };
  };
  
  LayoutMenu = connect(null, mapDispatchToProps)(LayoutMenu);
  export default LayoutMenu;