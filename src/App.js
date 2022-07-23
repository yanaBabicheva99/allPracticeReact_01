
import './Style/App.css';
import React, {useRef, useState, useMemo} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/postFilter";
import Pagination from "./components/Pagination";

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

    const countPosts = sortedAndSearchedPost.length;
    const sizePage = 2;
    const [current, setCurrent] = useState(1);

    const changeCurrent = function(page) {
        setCurrent(page);
    }

    const changePosts = (current, sizePage, posts) => {
        const firsIndex = (current - 1) * sizePage;
        return [...posts].splice(firsIndex, sizePage);
    }

    const handleChange = changePosts(current, sizePage, sortedAndSearchedPost);

    return (
    <div className="App">
        <PostForm create={createPost} />
        <hr className='m-2'/>
        <PostFilter filter={filter} setFilter={setFilter}/>
        <PostList posts={handleChange} title='Список постов 1' onDelete={removePost}/>
        <Pagination countPosts={countPosts} sizePage={sizePage} changeCurrent={changeCurrent} current={current}/>
    </div>
  );
}

export default App;
