import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { api_token, api, test_api, test, test_api2} from "../../shared/api";
import axios from "axios";

const GET_POST = "GET_POST";
const ONE_POST = "ONE_POST";
const UPDATE_POST = "UPDATE_POST";
const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";

const GET_ONE_USER = "GET_ONE_USER";

const getPost = createAction(GET_POST, (post_list) => ({ post_list }));
const onePost = createAction(ONE_POST, (one_post) => ({ one_post }));
const updatePost = createAction(UPDATE_POST, (one_post) => ({ one_post }));
const addPost = createAction(ADD_POST, (one_post) => ({ one_post }));
const deletePost = createAction(DELETE_POST, (postId) => ({ postId }));

const getOneUser = createAction(GET_ONE_USER, (nickname, postId) => ({
  nickname,
  postId,
}));

const initialState = {
  list: [],
  one_post: {},
  user_info: {
    nickname: "nickname_t",
  },
  thumbnail: "",
  title: "제목",
  context: "내용",
  dayBefore: "10일 전",
  commentCnt: 100,
  // likeCnt: 21,
};

const getPostFB = () => {
  return (dispatch, getState, { history }) => {
    test_api2.get("/posts", {})
    .then((res) => {
      const postDB = res.data;
      const post_list = [];
      postDB.forEach((p, i) => {
        let list = {
          postId: p.id,
          nickname: p.user.nickname,
          title: p.title,
          thumbnail: p.thumbnail,
          context: p.preview,
          dayBefore: p.createdAt,
          commentCnt: p.commentCnt,
          likeCnt: p.likeCnt,
        };
        post_list.push(list);
      });
      dispatch(getPost(post_list));
    })
    .catch((err) => {
        console.log(err)
    })
  };
};


const getOnePostFB = (postId) => {
  return async function (dispatch, getState, { history }) {
    console.log("postId !! ", postId);

    await test_api
      .get(`/post/${postId}`)
      .then((res) => {
        // console.log("상세피이지 res !! ", res.data);

        dispatch(
          onePost({
                isLiking: res.data.isLiking,
                title: res.data.post.title,
                context: res.data.post.context,
                createdAt: res.data.post.createdAt,
                commentCnt: res.data.post.commentCnt,
                likeCnt: res.data.post.likeCnt,
                thumbnail: res.data.post.thumbnail,
                userId: res.data.post.user.id,
                nickname: res.data.post.user.nickname,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// const oneUserPostFB = (nickname, postId) => {
//     (dispatch, getState, { history }) => {
//     }
// }

const addPostFB = (title, context, preview) => {

    return async function(dispatch, getState, {history}){

        console.log('title !! ',title);
        console.log('context !! ',context);
        console.log('preview !! ',preview);

        await test_api2.post('/post', {
            title,
            context,
            preview,
        })
        .then((res) => {
            
            console.log('작성 res !! ',res.data);
            history.replace('/');

        })
        .catch((err) => {
            console.log('err !! ',err);
        });
    }
}

const updateOnePostFB = (postId, title, context, preview) => {
  return async function (dispatch, getState, { history }) {
    // console.log('title !! ',title);
    // console.log('context !! ',context);
    // console.log('preview !! ',preview);

    await test_api2
      .put(`/post/${postId}`, {
        title,
        context,
        preview,
      })
      .then((res) => {
        console.log("수정하기 res !! ", res.data);

        history.replace(`/detail/${postId}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const deletePostFB = (postId = null) => {
  return (dispatch, getState, { history }) => {
    const post_idx = getState().post.list.findIndex((p) => p.postId === postId);
    api_token
      .delete(`/post/${postId}`, {})
      .then((res) => {
        dispatch(deletePost(post_idx));
        window.alert("삭제가 완료되었습니다");
        window.location.replace("/");
      })
      .catch((err) => {
        window.alert(err);
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),

    // [ADD_POST]: (state, action) => produce(state, (draft)=> {

    // }),

    [ONE_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.one_post = action.payload.one_post;
      }),

    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = draft.list.filter(
          (p) => p.postId !== action.payload.postId
        );
      }),
  },
  initialState
);

const actionCreator = {
  onePost,
  getPost,
  deletePost,
  getPostFB,
  getOnePostFB,
  updateOnePostFB,
  addPostFB,
  deletePostFB,
};

export { actionCreator };
