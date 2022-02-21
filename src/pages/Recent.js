//혹시 하나 싶어서 만들어놓음 (app.js 연결 x 뷰만)

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { actionCreator as postActions } from "../redux/modules/post";

import Post from "../component/Post";
import Header from "../component/Header";
import Menu from "../component/Menu";

const Main = () => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  console.log(post_list);

  React.useEffect(() => {
    if (post_list.length === 0) {
      dispatch(postActions.getPostFB());
    }
  });

  return (
    <React.Fragment>
      <Header></Header>
      <MainWrap>
        <Menu />
        <PostList>
          {post_list.map((p, d) => {
            return <Post {...p} />;
          })}
          <Post />
          <Post />
          <Post />
        </PostList>
      </MainWrap>
    </React.Fragment>
  );
};

// background-color : #F8F9FA;

const MainWrap = styled.div`
  margin: 0% 5%;
  /* box-sizing: border-box; */
`;

const PostList = styled.div`
/* display: inline-flex;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box; */
`;
export default Main;
