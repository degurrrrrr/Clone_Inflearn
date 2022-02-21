import React, { useRef } from "react";
import styled from "styled-components";

import Header from "../component/Header";
import CommentWrite from "../component/CommentWrite";
import CommentList from "../component/CommentList";

import { history } from "../redux/ConfigStore";

import {Viewer} from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import "prismjs/themes/prism.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import Prism from "prismjs";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import {actionCreator as postActions} from "../redux/modules/post";
import {useDispatch, useSelector} from "react-redux";

const Detail = (props) => {

  const dispatch = useDispatch();
  const post_one = useSelector((state) => state.post.one_post);

  const postId = props.match.params.id;

  const viewerRef = useRef();

  React.useEffect(() => {
    dispatch(postActions.getOnePostFB(postId));
    
    viewerRef.current.getInstance().setMarkdown('<p><img src="http://14.45.204.153:8023/%ED%95%98%EB%8A%98%EC%9D%B4_1645344158419.jpg" contenteditable="false"><img class="ProseMirror-separator"><br class="ProseMirror-trailingBreak"></p><p><br class="ProseMirror-trailingBreak"></p><p><strong>dfsdafsdafsafsadf</strong></p><h3>sdfasfdsafasdfdsfas</h3><p><em>sdfasfsafasfsafasfasf</em></p><p><br class="ProseMirror-trailingBreak"></p><p><del>sfdafsfsadfsfasfasfdsfasf</del></p>');
  }, [])
  
  const onDelete = () => {
    
    window.alert("삭제")
    
  };

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Header></Header>
      <DIV>
        <h1>{props.title}</h1>
        <EditDelBtn>
          <DeleteBtn onClick={() => {
            history.push(`/update/${postId}`);
          }}>수정</DeleteBtn>
          <DeleteBtn onClick={onDelete}>삭제</DeleteBtn>
        </EditDelBtn>
        <Info>
          <div style={{ display: "flex" }}>
            <div style={{ fontWeight: "bold", marginRight: "10px" }}>
              {props.user_info.nickname}
            </div>
            <div style={{ marginLeft: "10px" }}>{props.createAt}</div>
          </div>
          <div>
            <ButtonWrap>❤️</ButtonWrap>
          </div>
        </Info>
        
        <Thumbnail />
        
        <ViewerContainer>
          <Viewer
            ref={viewerRef}
            plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
          />
        </ViewerContainer>

        <Profile>
          <ProfileImg />
          <div>
            <h3>{props.user_info.nickname}</h3>
          </div>
        </Profile>

        <CommentWrite post_id={postId}/>
        <CommentList post_id={postId}/>
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
  border: 1px solid #adb5bd;
  border-radius: 20px;
  text-align: center;
  /* justify-content: center; */
`;

const Thumbnail = styled.div`
  max-width: 100%;
  height: 500px;
  max-height: 800px;
  margin: 30px auto 50px;
  object-fit: contain; //이미지의 가로세로 비율을 유지하면서, 이미지가 보여질 틀 내부에 들어가도록 크기를 맞춤 조절한다.
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("https://ilovecharacter.com/news/data/20210122/p179568629887999_597.jpg");
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
