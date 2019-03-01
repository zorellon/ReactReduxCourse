import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch,getState) => {
    // console.log('About to fetch posts!');
    await dispatch(fetchPosts());
    // console.log('fetched posts!');

    // Find all unique user ids
    const userIds = _.uniq(_.map(getState().posts, 'userId'));

    // Iterate over unique Ids and Call fetchUser
    userIds.forEach(id => dispatch(fetchUser(id)));

    // Possible refactor using _.chain
    // _.chain(getState().posts)
    //     .map('userId')
    //     .uniq()
    //     .forEach(id => dispatch(fetchUser(id)))
    //     .value() // calls execute on the chain
};

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get(`/posts`);
    dispatch({type:'FETCH_POSTS', payload: response.data});
};

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({type:'FETCH_USER', payload: response.data});
};


// Memoized Version of over fetching problem solution
// export const fetchUser = (id) =>  dispatch => {
//     _fetchUser(id,dispatch);
//  };
 
//  const _fetchUser = _.memoize(async (id,dispatch) => {
//      const response = await jsonPlaceholder.get(`/users/${id}`);
//      dispatch({type:'FETCH_USER', payload: response.data});
//  });
 
