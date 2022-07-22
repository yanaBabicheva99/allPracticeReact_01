
import './Style/App.css';
import React, {useRef, useState, useMemo} from "react";
import PostList from "./components/PostList";
import MyInput from "./components/UI/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/MySelect";

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

    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));

    }

    const sortPost = (sort) => {
        setSelectedSort(sort);
    }

    const sortedPost = useMemo(() => {
        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
        }
        return posts;
    }, [selectedSort, posts]);

    const sortedAndSearchedPost = useMemo(() => {
       return sortedPost.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [searchQuery, sortedPost])

  return (
    <div className="App">
        <PostForm create={createPost} />
        <hr style={{margin: '15px 0'}}/>
        <MyInput
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type='text'
            placeholder='Поиск...'
        />
        <MySelect
            value={selectedSort}
            onChange={sortPost}
            defaultValue='Сортировка'
            options={[
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По описанию'}
            ]}
        />
        {sortedAndSearchedPost.length !==0
            ?  <PostList posts={sortedAndSearchedPost} title='Список постов 1' onDelete={removePost}/>
            :  <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
        }
    </div>
  );
}

export default App;
