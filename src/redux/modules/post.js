import { createAction, handleActions } from "redux-actions";
import { api, api_token } from '../../shared/api';

const GET_POST = "GET_POST"
const ADD_POST = "ADD_POST"
const DELETE_POST = "DELETE_POST"

const getPost = createAction(GET_POST, (post_list))