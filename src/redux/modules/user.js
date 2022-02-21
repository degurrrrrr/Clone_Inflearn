import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { getCookie, setCookie, deleteCookie } from "../../shared/Cookie";
import { api, api_token } from "../../shared/api";

const GET_USER = "GET_USER";
const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";

const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (nickname) => (nickname));
const logOut = createAction(LOG_OUT, (user) => ({ user }));

const initialState = {
  nickname: null,
  is_login: false,
};

const loginFB = (nickname, password) => {
    return async (dispatch, getState, { history }) => {
    await api_token
      .post("/user/login", {
        nickname: nickname,
        password: password,
      })
      .then((res) => {
        const accessToken = "Bearer " + res.data.token;
        setCookie("is_login", `${accessToken}`);
 
        dispatch(setUser({
            nickname: res.data.nickname,
          })
        );
        window.alert(res.data.msg);
        history
          .push("/")

          .catch((err) => {
            console.log(err.response.data.errorMessage);
            window.alert(`error ${err.response.data.errorMessage}`);
          });
      });
  };
};

const signUpFB = (nickname, password) => {
    return (dispatch, getState, { history }) => {
    api_token
      .post("/user/signin", {
        nickname: nickname,
        password: password,
      })
      .then((res) => {
        window.alert(res.data.msg);
      })
      .catch((err) => {
        window.alert(err);
      });
  };
};

//로그인여부 확인
const isLoginFB = () => {
  return async (dispatch, getState, { history }) => {
    const token = getCookie("is_login");
    await api_token.get('/user/logout')
    .then((res) => {
        dispatch(setUser({
            token: token,
            nickname: res.data.nickname,
        }));
        history.push('/');
    })
    .catch((err) => {
        console.log(err.code, err.message)
    })
  };
};

export default handleActions(
  {
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
    [SET_USER]: (state, action) => produce(state, (draft) => {
        draft.nickname = action.payload.nickname;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
      }),
  },
  initialState
);

const actionCreators = {
  getUser,
  setUser,
  logOut,
  loginFB,
  signUpFB,
  isLoginFB,
};

export { actionCreators };