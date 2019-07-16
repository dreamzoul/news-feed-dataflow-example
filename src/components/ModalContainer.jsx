import React from 'react';

export default (props) => {

    return (
        <section className='modal-container'>
            <section className='form'>
                <h3 className='caption'>{props.caption}</h3>
                {props.children}
            </section>
        </section>

    )
}