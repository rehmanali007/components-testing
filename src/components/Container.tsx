import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core'
import Container from '@material-ui/core/Container';

type Props = {
    children: JSX.Element
}

const styles = makeStyles({
    root: {
        textAlign: 'center'
    }
})
export default function MyContainer({ children }: Props) {
    const classes = styles()
    return (
        <React.Fragment>
            <CssBaseline />
            <Container className={classes.root} maxWidth='xl'>
                {children}
            </Container>
        </React.Fragment>
    );
}
