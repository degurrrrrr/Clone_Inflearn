import React from "react";
import styled from "styled-components";

import Header from "../component/Header";
import CommentWrite from "../component/Header";
import CommentList from "../component/Header";

const Detail = (props) => {
  //   const dispatch = useDispatch();

  //   const post_list = useSelector((state) => state.post.list);
  //   const user_info = useSelector((state) => state.user.user);
  //   const id = props.match.params.post_id;
  //   const post_idx = post_list.findIndex((p) => p.post_id === id);
  //   const post_data = post_list[post_idx];

  //   const [post, setPost] = React.useState(post_data ? post_data : null);

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Header></Header>
      <DIV>
        <h1>겁나 긴 제목</h1>
        <EditDelBtn>
          {/* <div style={{ marginRight: "10px" }}>수정</div> */}
          <div>삭제</div>
        </EditDelBtn>
        <Info>
          <div style={{ display: "flex" }}>
            <strong>{props.nickname}닉네임</strong>·<span>작성날짜</span>
          </div>
          <div>좋아요?ㅎ</div>
        </Info>

        <Thumbnail />
        <Context>
          동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세
          이동해물과 백두산이 마르고 닳도록 하느님이 보우하사
          우리나라만세이동해물과 백두산이 마르고 닳도록 하느님이 보우하사
          우리나라만세이동해물과 백두산이 마르고 닳도록 하느님이 보우하사
          우리나라만세이동해물과 백두산이 마르고 닳도록 하느님이 보우하사
          우리나라만세이동해물과 백두산이 마르고 닳도록 하느님이 보우하사
          우리나라만세이
        </Context>

        <Profile>
          <ProfileImg />
          <div>
            <div>{props.nickname}닉네임</div>
          </div>
        </Profile>
      </DIV>
    </div>
  );
};

const DIV = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  box-sizing: border-box;
  padding: 25px 40px 0px;
  word-wrap: break-word;
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
  min-height: 
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

export default Detail;
