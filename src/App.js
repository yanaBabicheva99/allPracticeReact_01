
import './Style/App.css';
import React, {useRef, useState, useMemo} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/postFilter";

function App() {
    const [posts, setPosts] = useState([
        {id:1, title:'JavaScript', body:'мультипарадигменный язык программирования.' +
                ' Поддерживает объектно-ориентированный, императивный и функциональный стили.'},
        {id:2, title:'Python', body:'высокоуровневый язык программирования общего ' +
                'назначения с динамической строгой типизацией и автоматическим управлением памятью'},
        {id:3, title:'C++', body:'это компилируемый язык общего назначения, который' +
                ' поддерживает различные парадигмы программирования, в том числе процедурное' +
                ' программирование, объектно-ориентированное программирование и обобщённое программирование. '}
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));

    }

    const sortedPost = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return posts;
    }, [filter.sort, posts]);

    const sortedAndSearchedPost = useMemo(() => {
       return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()));
    }, [filter.query, sortedPost])

  return (
    <div className="App">
        <PostForm create={createPost} />
        <hr style={{margin: '15px 0'}}/>
        <PostFilter filter={filter} setFilter={setFilter}/>
        <PostList posts={sortedAndSearchedPost} title='Список постов 1' onDelete={removePost}/>
    </div>
  );
}

export default App;
