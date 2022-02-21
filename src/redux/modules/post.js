import {createAction, handleActions} from "redux-actions";
import { produce } from "immer";


const ONE_POST = "ONE_POST";





const onePost = createAction(ONE_POST, (one_post) => ({one_post}));



const initialState = {
    list: [],
    one_post: [
        {
          "postId" : "1",
          "title" : "test",
          "context" : "<p><br class='ProseMirror-trailingBreak'></p><p><br class='ProseMirror-trailingBreak'></p><p><strong>dfsdafsdafsafsadf</strong></p><h3>sdfasfdsafasdfdsfas</h3><p><em>sdfasfsafasfsafasfasf</em></p><p><br class='ProseMirror-trailingBreak'></p><p><del>sfdafsfsadfsfasfasfdsfasf</del></p>",
          "createdAt" : "2021-10-09 00:00:00",
          "commentCnt" : 23
        }
    ]
      
}




const getOnePostFB = (postId) => {
    return async function(dispatch, getState, {history}){
        console.log('postId !! ',postId);
    }
}








export default handleActions (
    {
        // [SET_POST]: (state, action) => produce(state, (draft)=> {

        // }),

        // [ADD_POST]: (state, action) => produce(state, (draft)=> {

        // }),

        [ONE_POST] : (state, action) => produce(state, (draft)=> {
          draft.one_post = action.payload.one_post;
        }),


    }, initialState
);



const actionCreator = {
    onePost,
    getOnePostFB,
}



export {actionCreator};