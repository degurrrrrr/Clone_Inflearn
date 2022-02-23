import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"; //빈 하트
import FavoriteIcon from "@mui/icons-material/Favorite"; //꽉 찬 하트

import { history } from "../redux/ConfigStore";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Likes = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  // const postId = props.match.params.postId;
  // console.log(postId)

  const nickname = useSelector((state) => state.user.nickname);
  const is_login = useSelector((state) => state.user.is_login);
  const is_local = localStorage.getItem("is_login") ? true : false;
  // const postId = props.params.

  // const postId = props.match.params.postId;

  //is_login은 false인데, is_local은 true?
  // const idx = props.likeId.findIndex((l) => l === nickname) //like의 id와 닉네임이 같은 순간의 인덱스 번호값
  // const is_like = idx !== -1 ? true : false;

  const [like, setLike] = useState(true); //클릭 상태
  const [likeCnt, setLikedCnt] = useState(0); //좋아요 개수

  const [Icon, setIcon] = useState("FavoriteBorderIcon");

  const [textColor, setTextColor] = useState("#adb5bd");
  const [bg, setBg] = useState("white");
  const [border, setBorder] = useState("#adb5bd");

  const onLiked = () => {

    let likeId;
    console.log("likeId?" + likeId)
    // if (props.likeId.length === 0) {
    //   likeId = [nickname];
    // } else {
    //   likeId = [...props.likeId, nickname];
    // }
    let cnt = props.likeCnt + 1;
    console.log(props);
    let post = {
      nickname: props.nickname,
      thumbnail: props.thumbnail,
      title: props.title,
      context: props.context,
      dayBefore: props.dayBefore,
      likeCnt: props.likeCnt,
      likeId: props.likeId,
    };

    // let _postId = .PostId;
    console.log(props);
    // dispatch(postActions.LikedFB(post, postId))
  };

  const liked = (props) => {
    if (!is_local) {
      window.alert("로그인 후 이용가능합니다!");
      return;
    }
    //2/22 props 추가했음
    if (like === true) {
      setLikedCnt(likeCnt + 1);
      setLike(false);
      setTextColor("white");
      setBg("#20c997");
      setBorder("#20c997");
      onLiked()
      // axios.get(`http://velog.milagros.shop/api/post/${postId}/like`,{},{
      //   headers: {

      //   }
      // })
    }
    if (like === false) {
      setLikedCnt(likeCnt - 1);
      setLike(true);
      setTextColor("#adb5bd");
      setBg("white");
      setBorder("#adb5bd");
    }
  };

  return (
    <React.Fragment>
      <HeartWrap
        style={{ color: textColor, borderColor: border, backgroundColor: bg }}
        onClick={liked}
      >
        <FavoriteIcon style={{ fontSize: "medium", marginRight: "5px" }} />
        {likeCnt}개
      </HeartWrap>
    </React.Fragment>
  );
};

const HeartWrap = styled.div`
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
