import React, { forwardRef } from 'react';
import TextField from '@material-ui/core/TextField';

export default forwardRef((props, ref) => {
    const { title, required, isValid } = props;

    return (
        <div className='line textarea'>

            <TextField
                id='standard-multiline-static'
                placeholder='Каждый новый абзац начинается после знака Enter'
                label={title}
                multiline
                inputRef={ref}
                rows='6'
                fullWidth={true}
                required={required}
            />

            {!isValid && required && <span className='warning'>Необходимо заполнить поле</span>}

        </div>
    )
});