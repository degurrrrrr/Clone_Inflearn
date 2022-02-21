import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
import "moment";
import moment from "moment";
import {api, api_token} from "../../shared/api";



const GET_COMMENT = "GET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";

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

        if(!post_id) {
            return;
        }

        await api_token.get(`/post/${post_id}/comments`)
        .then((res) => {

            console.log('댓글 리스트 res !! ', res.data);
            

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

            }
        )

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
  };
  
  export { actionCreators };
