
import './Style/App.css';
import React, {useRef, useState, useMemo, useEffect} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/postFilter";
import MyModal from "./components/MyModal/MyModal";
import MyButton from "./components/UI/MyButton";
import {usePosts} from "./hooks/usePosts";
import axios from "axios";
import PostService from "./API/PostService";
import Loader from "./components/Loader/Loader";
function App() {
    const [posts, setPosts] = useState([
        // {id:1, title:'JavaScript', body:'мультипарадигменный язык программирования.' +
        //         ' Поддерживает объектно-ориентированный, императивный и функциональный стили.'},
        // {id:2, title:'Python', body:'высокоуровневый язык программирования общего ' +
        //         'назначения с динамической строгой типизацией и автоматическим управлением памятью'},
        // {id:3, title:'C++', body:'это компилируемый язык общего назначения, который' +
        //         ' поддерживает различные парадигмы программирования, в том числе процедурное' +
        //         ' программирование, объектно-ориентированное программирование и обобщённое программирование. '}
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [visible, setVisible] = useState(false);
    const [isPostsLoading, setPostsLoading] = useState(false);

    useEffect(() => {
        fetchPosts();
    }, [])

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setVisible(false);
    }

    async function fetchPosts() {
        setPostsLoading(true);
       setTimeout(async() => {
           const posts = await PostService.getAll();
           setPosts(posts);
           setPostsLoading(false);
           }, 1000)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));

    }

    const sortedAndSearchedPost = usePosts(filter.sort, posts, filter.query);


  return (
    <div className="App">
        <MyButton onClick={() => fetchPosts()}>Get posts</MyButton>
        <MyButton onClick={() => setVisible(true)}>
            Создать пост
        </MyButton>
        <MyModal
            visible={visible}
            setVisible={setVisible}
        >
            <PostForm create={createPost} />
        </MyModal>
        <hr className='m-2' />
        <PostFilter filter={filter} setFilter={setFilter}/>
        {
            isPostsLoading
                ? <div style={{display:'flex', justifyContent: 'center', marginTop: '50px'}}
                >
                    <Loader />
                 </div>
            : <PostList posts={sortedAndSearchedPost} title='Список постов 1' onDelete={removePost}/>
        }

    </div>
  );
}

export default App;
