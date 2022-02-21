import React, { useState } from "react";
import styled from "styled-components";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"; //빈 하트
import FavoriteIcon from "@mui/icons-material/Favorite"; //꽉 찬 하트
import { set } from "lodash";

const Likes = (props) => {
  const [like, setLike] = useState(true); //클릭 상태
  const [likeCnt, setLikedCnt] = useState(0); //좋아요 개수

  const [Icon, setIcon] = useState('FavoriteBorderIcon')

  const [textColor, setTextColor] = useState('#adb5bd')
  const [bg, setBg] = useState('white');
  const [border, setBorder] = useState('#adb5bd')

  const liked = () => {
    if (like === true) {
      setLikedCnt(likeCnt + 1);
      setLike(false);
      setTextColor('white');
      setBg('#20c997');
      setBorder('#20c997');      
    }
    if (like === false) {
      setLikedCnt(likeCnt - 1);
      setLike(true);
      setTextColor('#adb5bd');
      setBg('white');
      setBorder('#adb5bd');
    }
  };

  return (
    <React.Fragment>
      <ButtonWrap style={{color: textColor, borderColor: border, backgroundColor:bg}} onClick={liked}>
        <FavoriteIcon
          style={{ fontSize: "medium", marginRight: "5px" }}
        />
        {likeCnt}개
      </ButtonWrap>
    </React.Fragment>
  );
};

const ButtonWrap = styled.div`
  width: 80px;
  height: 30px;
  font-size: 10px;
  border: 1px solid #adb5bd;
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
export default Likes;
