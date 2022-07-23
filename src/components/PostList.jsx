import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, onDelete}) => {
    if (!posts.length) {
         return <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
    }

    return <div>
        <h1 style={{textAlign: 'center'}}>{title}</h1>
        {
            posts.map((post, index )=>
                <PostItem key={post.id} post={post} index={index} onDelete={onDelete}/>)
        }
    </div>


};

export default PostList;