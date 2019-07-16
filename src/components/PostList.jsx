import React from 'react';

export default (props) => {
    const { list } = props;

    return (
        <ol className='post-list'>
            {list.map(element => {
                let post = React.cloneElement(props.children);
                post = { ...post, props: { ...post.props, ...element } };

                return post;
            })}
        </ol>
    )
}