import React from "react";
import styled from "styled-components";
import { Image } from "../element/index";

const Post = (props) => {
  return (
    <React.Fragment>
      <DIV>
        <Image height="40%" />
        <div style={{ textAlign: "left", margin: "10px" }}>
          <Contents>
            <Title>
              동해물과백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세
            </Title>
            <PostContent>
              {" "}
              동해물과백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세
              동해물과백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세
              동해물과백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세
            </PostContent>
          </Contents>
          <div>
            <PostTime>2022년 2월 18일 17:27:24</PostTime>
            <Footer>
              <Profile>
                <Image shape="circle" size="30" />
                <span>
                  by<b> username</b>
                </span>
              </Profile>
              <div>코멘트 0개</div>
            </Footer>
          </div>
        </div>
      </DIV>
    </React.Fragment>
  );
};

const DIV = styled.div`
  margin: 10px;
  border: 1px solid #eee;
  border-radius: 5px;
  width: 350px;
  height: 450px;
  position: relative;
  box-sizing: border-box;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 5px 15px 0px;
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -ms-transform: scale(1.05);
    -o-transform: scale(1.05);
    transform: scale(1.05);
  }
`;
const Title = styled.div`
  white-space: initial;
  font-size: 1rem;
  margin: 0px 0px 0.25rem;
  font-weight: bold;
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
  height: 102px;
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

export default Post;
