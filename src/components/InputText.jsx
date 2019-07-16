import React, { forwardRef } from 'react';
import TextField from '@material-ui/core/TextField';

export default forwardRef((props, ref) => {
    const { title, required, isValid } = props;

    return (
        <div className='line text'>

            <TextField
                id='standard-dense'
                label={title}
                inputRef={ref}
                margin='dense'
                fullWidth={true}
                required={required}
            />

            {!isValid && required && <span className='warning'>Необходимо заполнить поле</span>}

        </div>
    )
})