import React from 'react';
import ClipboardApp from './app';
import configureStore from './redux/store';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const store = configureStore();

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: { main: '#b10438' },
        secondary: { main: '#e2661d' },
    },
    typography: {
        useNextVariants: true,
        suppressDeprecationWarnings: true
    },
});      

export default 
    () => <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <ClipboardApp 
                backendUrl={"https://api.schul-cloud.org"}  
                courseId={"5a7acc5c994b406cfc028d5c"} 
            />
        </MuiThemeProvider>
    </Provider>;
