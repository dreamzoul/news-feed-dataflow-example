import React from 'react';
import Button from '@material-ui/core/Button';

export default (props, ref) => {
    const { submit, reset } = props;

    return (
        <div className='line form-actions'>
            <Button
                variant='outlined'
                color='secondary'
                size='small'
                onClick={() => {
                    typeof reset === 'function' && reset()
                }}>
                Отмена
            </Button>
            <Button
                variant='outlined'
                color='primary'
                size='small'
                onClick={() => {
                    typeof reset === 'function' && submit()
                }}>
                Добавить пост
            </Button>
        </div>
    )
};