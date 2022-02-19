import { handleActions, createAction } from "redux-actions";
import { produce } from "immer";
import { api, api_token } from "../../shared/api";

const SET_POST = "SET_POST";
const GET_POST = "GET_POST";
const ADD_POST = "ADD_POST";

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const getPost = createAction(GET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
// const deletePost = createAction(DELETE_POST, (postId) => ({postId}));

const initialState = {
  list: [],
  post: [],
  image: "",
};

const initialPost = {
  user_info: {
    nickname: "nickname",
  },
  // thumbnail: "/images/basic.jpg",
  imagae: "http://www.ipon.co.kr/common/img/default_profile.png",
  title: "제목",
  context: "내용",
  // dayBefore": "7일 전",
  createAt: "2022-02-18 11:01:09",
  commentCnt: 2,
  // "likeCnt": 12
};

const getPostFB = () => {
  return function (dispatch) {
    api_token
      .get("/posts", {})
      .then(function (res) {
        const postDB = res.data.posts;
        console.log(postDB);

        const post_list = [];
        postDB.forEach((p, idx) => {
          let list = {
            nickname: p.nickname,
            title: p.title,
            // postID: p.postID,
            image: p.thumbnail,
            context: p.context,
            commentCnt: p.commentCnt,
            dayBefore: p.dayBefore,
            likeCnt: p.likeCnt,
          };
          post_list.push(list);
        });
        dispatch(getPost(post_list));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [GET_POST]: (state, action) => {
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      });
    },
  },
  initialState
);

const actionCreators = {
  getPost,
  getPostFB,
};

export { actionCreators };
