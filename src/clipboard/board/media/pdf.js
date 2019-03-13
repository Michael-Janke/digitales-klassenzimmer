import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PDFObject from 'pdfobject';

const styles = {
    root: {
        width: '100%',
        height: '100%',
    }
};

class PdfViewer extends React.Component {

    static accepts(medium) {
        return medium 
            && medium.type
            && medium.type.mime
            && medium.type.mime.toLowerCase().indexOf('/pdf') >= 0;
    }

    myRef = React.createRef();

    componentDidMount() {
        const { medium, preview } = this.props;
        if(!preview) {
            PDFObject.embed(medium.src, this.myRef.current);
            this.pdfMounted = true;
        }
    }

    componentDidUpdate() {
        this.componentDidMount();
    }

    render() {
        const { classes } = this.props;
        return <div className={classes.root} ref={this.myRef} />;
    }
}

PdfViewer = withStyles(styles)(PdfViewer);
export default PdfViewer;