import React from 'react';
import { withStyles } from '@material-ui/core';

import Image from './image';
import YouTube from './youtube';
import File from './file';
import Link from './link';
import Etherpad from './etherpad';


const styles = {
    info:{
        width: '100%',
        overflowX: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: '80%',
    }
};

class Thumbnail extends React.PureComponent {
    
    render() {
        const { medium, classes } = this.props;
        
        if(Image.accept(medium)) return <Image {...medium} infoClassName={classes.info} />;
        if(YouTube.accept(medium)) return <YouTube {...medium} infoClassName={classes.info}  />;
        if(Link.accept(medium)) return <Link {...medium} infoClassName={classes.info}  />;
        if(Etherpad.accept(medium)) return <Etherpad {...medium} infoClassName={classes.info}  />;
        return <File {...medium} infoClassName={classes.info}  />;
    }
}

Thumbnail = withStyles(styles)(Thumbnail);
export default Thumbnail;