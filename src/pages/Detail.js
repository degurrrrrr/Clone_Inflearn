import React, { useRef, useState } from "react";
import styled from "styled-components";

import Header from "../component/Header";
import CommentWrite from "../component/CommentWrite";
import CommentList from "../component/CommentList";
import Likes from "../element/Likes";
import { history } from "../redux/ConfigStore";

import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import "prismjs/themes/prism.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import Prism from "prismjs";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"; //빈 하트
import FavoriteIcon from "@mui/icons-material/Favorite"; //꽉 찬 하트
import { actionCreator as postActions } from "../redux/modules/post";
import { useDispatch, useSelector } from "react-redux";

import moment from "moment";

const Detail = (props) => {
  const dispatch = useDispatch();
  // const [isLike, setIsLike] = useState(isLiking);
  const post_one = useSelector((state) => state.post.one_post);

  const userId = localStorage.getItem("userId");

  const isLike = post_one.isLiking ;
  console.log(isLike)
  const postId = props.match.params.postId;

  const viewerRef = useRef();
  console.log("post_one !! ", post_one);

  React.useEffect(() => {
    // if(!post_one[0]){
    dispatch(postActions.getOnePostFB(postId));
    // }
    
    viewerRef.current
      .getInstance()
      .setMarkdown(
        post_one.context
      );

    viewerRef.current.getInstance().setMarkdown(post_one.context);

  }, [post_one.nickname]);

  const onDelete = () => {
    dispatch(postActions.deletePostFB(postId));
  };

  const liked = (props) => {
    if (!userId) {
      window.alert("로그인 후 이용가능합니다!");
      return;
    }
    const like_cnt = post_one.likeCnt;
    const isLiking = post_one.isLiking;

    !isLike
      ? dispatch(postActions.LikePostFB(postId, isLiking, like_cnt))
      : dispatch(postActions.DeleteLikeFB(postId, isLike, like_cnt));
  };

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Header></Header>
      <DIV>
        <h1>{post_one.title}</h1>
        <EditDelBtn>
          <DeleteBtn
            style={{display: post_one.userId == userId ? "block" : "none" }}
            onClick={() => {
              history.push(`/update/${postId}`);
            }}
          >
            수정
          </DeleteBtn>
          <DeleteBtn 
          style={{display: post_one.userId == userId ? "block" : "none" }}
          onClick={onDelete}>삭제</DeleteBtn>
        </EditDelBtn>
        <Info>
          <div style={{ display: "flex" }}>
            <div style={{ fontWeight: "bold", marginRight: "10px" }}>
              {post_one.nickname}
            </div>
            <div style={{ marginLeft: "10px" }}>
              {moment(post_one.createdAt).format("YYYY-MM-DD")}
            </div>
          </div>
          <ButtonWrap>
            <HeartWrap
              style={{
                color: isLike ? "white" : "",
                backgroundColor: isLike ? "#20c997" : "",
                borderColor: isLike ? "#20c997" : "",
              }}
              onClick={liked}
            >
              <FavoriteIcon
                style={{
                  fontSize: "medium",
                  marginRight: "5px",
                }}
              />
              {post_one.likeCnt}개
            </HeartWrap>
          </ButtonWrap>
        </Info>

        <Thumbnail thumbnail={post_one.thumbnail} />

        <ViewerContainer>
          <Viewer
            ref={viewerRef}
            plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
          />
        </ViewerContainer>

        <Profile>
          <ProfileImg />
          <div>
            <h3>{post_one.nickname}</h3>
          </div>
        </Profile>

        
        <CommentWrite post_id={postId} />
        <CommentList post_id={postId} />
      </DIV>
    </div>
  );
};

Detail.defaultProps = {
  user_info: {
    nickname: "initial_nickname",
  },
  title: "initial_title",
  image: "http://www.ipon.co.kr/common/img/default_profile.png",
  context: "initial_context",
  createAt: "initial_2022-02-04 16:20:00",
  commentCnt: "initial_100",
  postID: "1234567",
};

const DIV = styled.div`
  width: 1000px;
  min-width: 540px;
  height: 100%;
  margin: auto;
  box-sizing: border-box;
  padding: 25px 40px 25px;
  word-wrap: break-word;

  @media screen and (max-width: 1024px) {
    width: 850px;
  }
`;

const DeleteBtn = styled.div`
  margin-left: 10px;
  color: #868e96;
  cursor: pointer;
`;

const EditDelBtn = styled.div`
  height: 20px;
  /* color: #ccc; */
  float: right;
  display: flex;
  margin-bottom: 20px;
`;

const Info = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
`;

const ButtonWrap = styled.div`
  width: 80px;
  height: 30px;
  font-size: 10px;
  border: 1px solid #adb5bd;
  font-color: '#adb5bd';
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    border-color: #20c997;
    background-color: #20c997;
    color: white;
  }
`;

const HeartWrap = styled.div`
  width: 80px;
  height: 30px;
  font-size: 10px;
  border: 1px;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Thumbnail = styled.div`
  max-width: 80%;
  height: 350px;
  max-height: 800px;
  margin: 30px auto 50px;
  object-fit: contain; //이미지의 가로세로 비율을 유지하면서, 이미지가 보여질 틀 내부에 들어가도록 크기를 맞춤 조절한다.
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("${(props) => props.thumbnail}");
`;

const Context = styled.div`
  width: 100%;
  max-height: 800px;
  height: 100%;
  line-height: 200%;
`;

const Profile = styled.div`
  width: 100%;
  height: 128px;
  background-color: #fff;
  display: inline-flex;
  justify-content: start;
  align-items: center;
  margin-top: 128px;
  margin-bottom: 48px;
`;

const ProfileImg = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin: auto 10px auto 20px;
  background-image: url("https://ilovecharacter.com/news/data/20210122/p179568629887999_597.jpg");
  background-size: contain;
`;

const ViewerContainer = styled.div`
  height: 100%;
`;

export default Detail;
