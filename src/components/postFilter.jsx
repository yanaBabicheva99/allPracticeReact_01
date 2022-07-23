import React from 'react';
import MyInput from "./UI/MyInput";
import MySelect from "./MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={(e) => setFilter({...filter, query: e.target.value})}
                type='text'
                placeholder='Поиск...'
            />
            <MySelect
                value={filter.sort}
                onChange={(e) => setFilter({...filter, sort: e})}
                defaultValue='Сортировка'
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'}
                ]}
            />
        </div>
    );
};

export default PostFilter;