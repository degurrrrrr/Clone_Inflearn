import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { api, api_token } from '../../shared/api';

const SET_POST = "SET_POST";
const GET_POST = "GET_POST";
const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";

const setPost = createAction(SET_POST, (post_list) => ({post_list}));
const getPost = createAction(GET_POST, (post_list) => ({post_list}));
const deletePost = createAction(DELETE_POST, (postID) => ({postID}));

const initialState = {
    list: [],
    post: [],
}

const initialPost  = {
    user_info: {
        nickname: "user's nickname"
    },
    thumbnail : null,
    title: "제목",
    context: "내용",
    dayBefore: "10일 전",
    commentCnt: 100,
    // likeCnt: 21,
}

const getPostFB = () => {
    return (dispatch, getState, {history}) => {
        api_token.get('/posts',{})
        .then((res) => {
            const postDB = res.data.posts;
            console.log(postDB);

            const post_list = [];
            postDB.forEach((p,i) => {
                let list = {
                    nickname: p.nickname,
                    title: p.title,
                    // postId: p.postId, //포스트 아이디 줘야하는거 아닌지
                    thumbnail: p.thumbnail,
                    context: p.context,
                    dayBefore: p.dayBefore,
                    commentCnt: p.commentCnt,
                    // likeCnt: p.likeCnt,
                };
                post_list.push(list);
            });
            dispatch(getPost(post_list))
        });
    }
};

const actionCreators = {
    setPost, getPost, deletePost, getPostFB
}

export { actionCreators }