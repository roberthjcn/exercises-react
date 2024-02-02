import { Grid } from '@material-ui/core';
import React, { useState } from 'react';

const NumberPositive =() =>{
    const [number, setNumber] = useState<string>('');
    const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        const { value } = target;
        const regex = /[^0-9\.]/g;
        setNumber(value.replace(regex, ''));
    }
    return (
        <Grid>
            <input placeholder="Ingresa un número " type="text" name="number" value={number} onChange={handleNumberChange}/>
        </Grid>
    );
}

export default NumberPositive;