import React from 'react';
import {useMemo} from "react";

export const useSortedPosts = (sort, posts) => {

    const sortedPost = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return posts;
    }, [sort, posts]);
  return sortedPost;
}

export const usePosts = (sort, posts, query) => {
    const sortedPost = useSortedPosts(sort, posts)
    const sortedAndSearchedPost = useMemo(() => {
        return sortedPost.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
    }, [query, sortedPost]);

    return sortedAndSearchedPost;
}

