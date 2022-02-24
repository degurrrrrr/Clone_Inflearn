import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { actionCreator as postActions } from "../redux/modules/post";

import Post from "../component/Post";
import Header from "../component/Header";
import Menu from "../component/Menu";
import Likes from "../element/Likes";

const Main = () => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  console.log(post_list.length);

  React.useEffect(() => {
    dispatch(postActions.getPostFB());
  }, []);

  return (
    <React.Fragment>
      <Header></Header>
      <MainWrap>
        <Menu />
        <PostList>
          {post_list.map((p, id) => {
            return <Post key={id} {...p} />;
          })}
        </PostList>
      </MainWrap>
    </React.Fragment>
  );
};

// background-color : #F8F9FA;

const MainWrap = styled.div`
`;

const PostList = styled.div`
  margin: 0 5%;
  @media screen and (max-width: 1024px) {
    margin: 0 1%;
  }
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
`;
export default Main;
