import React from 'react';
import { withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import LinearProgress from '@material-ui/core/LinearProgress';

import Thumbnail from './thumbnail';

const styles = theme => ({
    root:{
        backgroundColor: theme.palette.primary.main,
        maxWidth: 125,
        minWidth: 125,
        margin: 5,
        paddingBottom: 5,
        color: 'white',
        textAlign: 'center',
        overflow: 'hidden',
        cursor: 'grab',
    },
    button:{
        width: '100%'
    },
    isDragging: {
        opacity: 0.5 
    }
});

class MediumContainer extends React.PureComponent {
    render() {
        const { medium, url, isDragging, classes, onClick, onDoubleClick, onRightClick } = this.props;

        return  <Card 
                    className={classes.root + (isDragging ? ' ' + classes.isDragging : '')}
                    onClick={onClick}
                    onDoubleClick={onDoubleClick}
                    onContextMenu={onRightClick}
                >
                    <CardActionArea classes={{root: classes.button}}>
                        <Thumbnail 
                            medium={medium} 
                            url={url} 
                            infoClassName={classes.info}
                        />
                        {medium && medium.progress !== undefined && 
                            <LinearProgress variant="determinate" value={medium.progress} color="secondary" />
                        }
                    </CardActionArea>
                </Card>;
    }
}

MediumContainer = withStyles(styles)(MediumContainer);
export default MediumContainer;