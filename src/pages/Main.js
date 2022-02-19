import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { actionCreators as postActions } from "../redux/modules/post";
import Post from "../component/Post";
import Header from '../component/Header';

const Main = () => {
  // const dispatch = useDispatch();
  // const post_list = useSelector((state) => state.post.list);

  // React.useEffect(() => {
  //   if (post_list.length === 0) {
  //     dispatch(postActions.getPostFB());
  //   }
  // });

  return (
    <React.Fragment>
      <Header></Header>
      {/* {post_list.map((p, d) => {
        return <Post {...p} />;
      })} */}
      <Post />
    </React.Fragment>
  );
};

// background-color : #F8F9FA;
export default Main;
