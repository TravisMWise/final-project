import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux'; // Use redux to get the posts from the reducers

import Post from './Post/Post.js';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.postReducers); // Use redux to get the posts from the reducers
    const classes = useStyles();
    
    console.log(posts);

    return (
        (posts.length < 1) 
        ? <CircularProgress /> 
        : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6} md={6}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Posts;