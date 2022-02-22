import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

const GET_LIKE = "GET_LIKE";  //좋아요 개수 가져오기
const SET_LIKE = "SET_LIKE";  //좋아요 개수 추가하기
const DELETE_LIKE = "DELETE_LIKE"; //좋아요 개수 삭제하기(set으로 안되나)

const getLike = createAction(GET_LIKE, (likeCnt) => ({likeCnt}))
const setLike = createAction(SET_LIKE, (likeCnt) => ({likeCnt}))
const deleteLike = createAction(DELETE_LIKE, () => ({}));


export default handleActions({
    [GET_LIKE]: (state, action) => produce(state, (draft) => {
        draft.likeCnt = action.payload.likeCnt
    }),
    // [SET_LIKE]: (state, action) => produce(state, (draft) => {
    // }),
    // [DELETE_LIKE]: (state, action) => produce(state, (draft) => {
    //   //
    // }),
})

const actionCreators = {
    getLike, setLike, deleteLike
}

export {actionCreators}