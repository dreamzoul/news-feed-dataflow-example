import React from 'react';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

//Получить массив из абзацев статьи
function getArticleContent(content) {
    return content.map(
        (paragraph, i) =>
            <p
                className='paragraph'
                key={i}>
                {paragraph}
            </p>
    )
}

export default (props) => {
    const { content, imgLink, publicationTime, sources, title, closeForm } = props;

    return (
        <article className='article-detail'>
            <div className='go-back-btn'>
                <Button
                    variant='text'
                    color='primary'
                    size='large'
                    onClick={() => { typeof closeForm === 'function' && closeForm() }}>
                    <Icon color="primary" style={{ fontSize: 80 }}>undo</Icon>
                </Button>
            </div>

            <h1 className='title'>
                {title}
            </h1>

            <h5 className='meta-article date-publishing'>
                {`Опубликовано: ${publicationTime}`}
            </h5>

            <div className='img-container'>
                <img
                    width='100%'
                    src={imgLink}
                    alt='Изображеие отсутствует' />
            </div>
            
            {getArticleContent(content)}

            <h5 className='meta-article'>
                {sources
                    ? <span>Статья взята из:
                        <a href={sources}>
                            {sources}</a>
                    </span>
                    : <span>Источник не ауказан</span>}
            </h5>
        </article>
    )
};
