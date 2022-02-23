import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
import "moment";
import moment from "moment";
import {api, api_token, test} from "../../shared/api";



const GET_COMMENT = "GET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

const LOADING = "LOADING";


const getComment = createAction(GET_COMMENT, (post_id, comment_list) => ({post_id, comment_list}));
const addComment = createAction(ADD_COMMENT, (post_id, comment) => ({post_id, comment}));


const loading = createAction(LOADING, (is_loading) => ({is_loading}));


const initialState = {
    list: {},
    is_loading: false,
}

const getCommentFB = (post_id = null) => {
    return async function(dispatch, getState, {history}){

        console.log('댓글 조회 post_id !! ',post_id);

        if(!post_id) {
            return;
        }

        await api_token.get(`/post/${post_id}/comments`)
        .then((res) => {

            // console.log('댓글 리스트 res !! ', res.data.commentsParents); 
            
            const commentList = res.data.commentsParents.reduce((acc, cur, i) => {
                
                acc.push({
                    commentId: cur.id,
                    userId: cur.userId,
                    commentBody: cur.commentBody,
                    createdAt: cur.createdAt,
                    parentsId: cur.parentsId,
                    updatedAt: cur.updatedAt,
                    nickname: cur.user !== null ? cur.user.nickname : "닉네임없음",
                });

                return acc;
            }, []);

            // console.log('commentList !! ',commentList);


            dispatch(getComment(post_id, commentList))

        })
        .catch((err) => {
            console.log(err);
        });

    }
}


const addCommentFB = (post_id, contents) => {
    return async function(dispatch, getState, {history}){
        await api_token.post(`/post/${post_id}/comment/${0}`, 
            {
                commentBody: contents,
                userId: localStorage.getItem('userId'),
            }
        ).then((res) => {
            const preList = getState().comment.list[post_id];
            // console.log('preList !! ',preList);
            console.log('addCommentFb !! ', res.data.comment);

            const newComment = {
                commentId: res.data.comment.id,
                userId: res.data.comment.userId,
                commentBody: res.data.comment.commentBody,
                createdAt: res.data.comment.createdAt,
                parentsId: res.data.comment.parentsId,
                updatedAt: res.data.comment.updatedAt,
                nickname: "닉네임없음",
            };

            const addList = [...preList, newComment];

            // console.log('addList !! ',addList);

            dispatch(getComment(post_id, addList))


        }).catch((err) => {
            console.log(err);
        })

    }
}


const updateCommentFB = (postId, commentId, contents) => {
    return async function(dispatch, getState, {history}) {

        // console.log('comment_id !! ',commentId);
        // console.log('postid !! ',postId);

        await api_token.patch(`/post/${postId}/comment/${commentId}`, 
            {
                commentBody: contents,
            }
        ).then((res) => {

            const preList = getState().comment.list[postId];
            // console.log('preList !! ',preList);

            // console.log('updateCommentFb !! ', res);

            const upDateList = preList.reduce((arr, cur, i) => {    
                if(cur.commentId === commentId){
                    arr.push({...cur, commentBody: contents});
                }else {
                    arr.push(cur);
                }
                
                return arr;
            }, []);

            // console.log('upDateList !! ',upDateList);

            dispatch(getComment(postId, upDateList));

        }).catch((err) => {
            console.log(err);
        })

    }
}

const removeCommentFB = (postId, commentId) => {
    return async function(dispatch, getState, {history}) {

        // console.log('comment_id !! ',commentId);
        // console.log('postid !! ',postId);

        await api_token.patch(`/post/${postId}/comment/${commentId}/disabled` 
        ).then((res) => {

            const preList = getState().comment.list[postId];
            // console.log('preList !! ',preList);

            const deleteList = preList.filter((item) => item.commentId !== commentId);

            // console.log('deleteList !! ', deleteList);

            console.log('removeCommentFB !! ', res);

            dispatch(getComment(postId, deleteList));


        }).catch((err) => {
            console.log(err);
        })

    }
}


export default handleActions(
    {
        [GET_COMMENT]: (state, action) => produce(state, (draft) => {
            draft.list[action.payload.post_id] = action.payload.comment_list;
        }),
        [ADD_COMMENT]: (state, action) => produce(state, (draft)=> {
  
        }),
        [LOADING]: (state, action) => 
        produce(state, (draft) => {
          draft.is_loading = action.payload.is_loading;
        })
    },
    initialState
  );
  
  const actionCreators = {
    getCommentFB,
    getComment,
    addComment,
    addCommentFB,
    updateCommentFB,
    removeCommentFB,
  };
  
  export { actionCreators };
