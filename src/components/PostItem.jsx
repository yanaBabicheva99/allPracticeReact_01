import React from 'react';
import MyButton from "./UI/MyButton";
const PostItem = ({post, index, onDelete}) => {
    return (
        <div className='post'>
            <div className="post__content">
                <strong>{index+1}. {post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="post__btn">
                <MyButton onClick={() => onDelete(post)}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;