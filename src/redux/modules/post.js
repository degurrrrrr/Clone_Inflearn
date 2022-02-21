import {createAction, handleActions} from "redux-actions";
import { produce } from "immer";
import {api_token, api, test_api} from "../../shared/api";

const GET_POST = "GET_POST";
const ONE_POST = "ONE_POST";
const DELETE_POST = "DELETE_POST";


const getPost = createAction(GET_POST, (post_list) => ({post_list}));
const onePost = createAction(ONE_POST, (one_post) => ({one_post}));
const deletePost = createAction(DELETE_POST, (postId) => ({postId}));


const initialState = {
    list: [],
    one_post: {
        "title" : "test",
        "context" : "<p><br class='ProseMirror-trailingBreak'></p><p><br class='ProseMirror-trailingBreak'></p><p><strong>dfsdafsdafsafsadf</strong></p><h3>sdfasfdsafasdfdsfas</h3><p><em>sdfasfsafasfsafasfasf</em></p><p><br class='ProseMirror-trailingBreak'></p><p><del>sfdafsfsadfsfasfasfdsfasf</del></p>",
        "createdAt" : "2021-10-09 00:00:00",
        "commentCnt" : 23
    },
    user_info:{
        nickname: "nickname_t",
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

const getOnePostFB = (postId) => {
    return async function(dispatch, getState, {history}){
        console.log('postId !! ',postId);

        await api_token.get(`/posts/${postId}`)
        .then((res) => {

            console.log('상세피이지 res !! ', res.data);

            dispatch(onePost({
                title: res.data.title,
                context: res.data.context,
                createdAt: res.data.createdAt,
                commentCnt: res.data.commentCnt,
            }));


        }).catch((err) => {
            console.log(err);
        });

    }
}

const deletePostFB = (postId = null) => {
    return (dispatch, getState, { history }) => {
        const post_idx = getState().post.list.findIndex((p) => p.postId === postId );
        api_token
        .delete(`/post/${postId}`, {})
        .then((res) => {
            dispatch(deletePost(post_idx))
            window.alert("삭제가 완료되었습니다")
            window.location.replace('/');
        })
        .catch((err) => {
            window.alert(err)
            console.log(err)
        })
    }
}

export default handleActions (
    {
        [GET_POST]: (state, action) => produce(state, (draft)=> {
            draft.list = action.payload.post_list
        }),

        // [ADD_POST]: (state, action) => produce(state, (draft)=> {

        // }),

        [ONE_POST] : (state, action) => produce(state, (draft)=> {
          draft.one_post = action.payload.one_post;
        }),

        [DELETE_POST] : (state, action) => produce(state, (draft)=> {
            draft.list = draft.list.filter(
                (p) => p.postId !== action.payload.postId
            );
        }),


    }, initialState
);



const actionCreators = {
    onePost,
    getPost,
    deletePost,
    getPostFB,
    getOnePostFB,
    deletePostFB,
}



export {actionCreators};
