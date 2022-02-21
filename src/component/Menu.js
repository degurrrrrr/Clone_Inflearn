import React from "react";
import styled from "styled-components";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { useHistory } from "react-router-dom";

const Menu = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <MenuWrap>
        <Trending>
          <TrendingUpIcon style={{ marginRight: "8px" }} />
          트렌딩
        </Trending>
        <Updated
          onClick={() => {
            history.push("/recent");
          }}
        >
          <AccessTimeIcon style={{ marginLeft: "20px", marginRight: "8px" }} />
          최신순
        </Updated>
        <MyPost>내가 쓴 글</MyPost>
      </MenuWrap>
    </React.Fragment>
  );
};

const MenuWrap = styled.div`
  margin-right: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 38px;
`;

const Trending = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-bottom: 2px solid black;
`;

const Updated = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #868e96;
`;

const MyPost = styled.div`
  border: 1px solid black;
  margin-left: 20px;
  height: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  border-radius: 1rem;
  outline: none;
  font-weight: bold;
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.125s ease-in 0s;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
`;
export default Menu;
