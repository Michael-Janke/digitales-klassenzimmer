import React from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import Media from '../media';
import Slide from '@material-ui/core/Slide';

const styles = (theme) => ({
    root: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        zIndex: -2,
        overflowY: 'auto'
    },
    fabLeft: {
        position: 'absolute',
        bottom: 20,
        left: 20,
    }
});

class TeacherDesk extends React.PureComponent {
    render() {
        const { media, url, uploads, desk, classes } = this.props;
        if(!media) return null;
        return (
                <Slide direction="right" in={true} key={desk} mountOnEnter unmountOnExit timeout={300}>
                    <div className={classes.root}>
                        {media.map((medium) => 
                            <Media key={medium.id} medium={medium} url={url} />
                        )}
                        {Object.keys(uploads).map((key) => 
                            <Media key={key} medium={uploads[key]} upload={true} />
                        )}
                    </div>
                </Slide>
            );
    }
}

TeacherDesk = withStyles(styles)(TeacherDesk);
TeacherDesk = connect(({uploads, socket, desks}) => ({
    uploads,
    url: socket.url,
    desk: desks.desk,
    media: desks.currentDesk && desks.currentDesk.media
}))(TeacherDesk);
export default TeacherDesk;