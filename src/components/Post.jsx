import React from 'react';

export default (props) => {
    const { id, onClick, title, imgLink } = props;

    return (
        <li
            className='post-preview'
            key={id}
            onClick={() => {
                typeof onClick === 'function' && onClick(id);
            }} >
            <div className='img-container'>
                <img
                    width='100%'
                    src={imgLink}
                    alt='Изображеие отсутствует' />
            </div>
            <h4 className='caption'>{title}</h4> 
        </li >
    )
}