import React, {useState, useEffect} from 'react';
import { Grid, makeStyles, Typography} from '@material-ui/core';

const useStyles = makeStyles ( ()=>({
    container: {
        justifyContent: 'center', 
        display: 'flex', 
        alignItems: 'center', 
        height: '100vh',
    },
}));

const Clock = () => {
    const classes = useStyles();
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    });

    return (
        <Grid className={classes.container}>
            <Typography variant='h1'><strong>{time.getHours()}: {time.getMinutes()}: {time.getSeconds()}</strong></Typography>
        </Grid>
    );
}

export default Clock;