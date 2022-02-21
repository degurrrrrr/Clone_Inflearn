import React from "react";
import styled from "styled-components";
import { Image } from '../element/index';
import Likes from '../element/Likes';
import { history } from "../redux/ConfigStore";
import { useHistory } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';

const Post = (props) => {
  const history = useHistory();


  return (
    <React.Fragment>
      <DIV onClick={() => {history.push(`detail/${props.postId}`)}}>
        <Image height="40%" src={props.thumbnail} />
        <div style={{ textAlign: "left", margin: "10px" }}>
          <Contents>
            <Title>{props.title}</Title>
            <PostContent>{props.context}</PostContent>
          </Contents>
          <div>
            <PostTime>{props.dayBefore}</PostTime>
            <Footer>
              <Profile>
                <Image shape='circle' size='30' borderRadius="15px"/>
                <span>
                  by<b> {props.nickname}</b>
                </span>
              </Profile>
              <Likes />
              <LikeCntWrap><FavoriteIcon style={{fontSize: 'small', marginRight: '3px'}} /> {props.likeCnt}개</LikeCntWrap>
            </Footer>
          </div>
        </div>
      </DIV>
    </React.Fragment>
  );
};

Post.defaultProps = {
  nickname: "initial_nickname",
  title: "initial_title",
  thumbnail: "http://www.ipon.co.kr/common/img/default_profile.png",
  context: "initial_context",
  createAt: "initial_2022-02-04 16:20:00",
  dayBefore: '7일전',
  likeCnt: 1000,
  postId: "1234567",
};

const DIV = styled.div`
  margin: auto;
  border: 1px solid #eee;
  border-radius: 5px;
  width: 350px;
  height: 450px;
  position: relative;
  box-sizing: border-box;
  transition: all 0.3s ease-out;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 5px 15px 0px;
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -ms-transform: scale(1.05);
    -o-transform: scale(1.05);
    transform: translateY(-10px);
  }
  /* @media screen and (max-width: 1024px) {
    margin: 0 1%; */
  /* }; */
  margin-bottom: 40px;
`;
const Title = styled.div`
  white-space: initial;
  font-size: 1rem;
  margin: 0px 0px 0.6rem;
  font-weight: bold;
  width: 296;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Contents = styled.div`
  /* white-space: initial; */
  padding: 1rem;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const PostContent = styled.div`
  width: 296px;
  height: 110px;
  overflow: hidden;
`;

const PostTime = styled.div`
  font-size: 0.75rem;
  line-height: 1.5;
  color: #ccc;
  margin: 0rem 0rem 1rem 1rem;
`;

const Footer = styled.div`
  font-size: 0.75rem;
  display: inline-flex;
  border-top: 1px solid #eee;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 50px;
  /* position: absolute; */
  bottom: 0px;
`;

const Profile = styled.div`
  display: inline-flex;
  align-items: center;
`;

const ProfileImg = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;

const LikeCntWrap = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`
export default Post;
