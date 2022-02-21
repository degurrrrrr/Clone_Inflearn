import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { actionCreators as postActions } from "../redux/modules/post";

import Post from "../component/Post";
import Header from "../component/Header";


const Main = () => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  console.log(post_list)

  React.useEffect(() => {
    if (post_list.length === 0) {
      dispatch(postActions.getPostFB());
    }
  });

  return (
    <React.Fragment>
      <MainWrap></MainWrap>
      <Header></Header>
      {post_list.map((p, d) => {
        return <Post {...p} />;
      })}
      <Post />
    </React.Fragment>
  );
};

// background-color : #F8F9FA;

const MainWrap = styled.div`
    @media screen and (max-width: 1024px) {
        margin:0 1%
    };
`;

export default Main;
