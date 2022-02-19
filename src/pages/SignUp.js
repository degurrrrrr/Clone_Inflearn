import React, { useState } from "react";
import styled from "styled-components";
import { Image } from "../element/index";

import { nicknameCheck, pwCheck } from "../shared/Common";

import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch } from "react-redux";
// import { actionCreators as loginAction } from '../redux/modules/user'
// import { actionCreators as signUpAction } from '../redux/modules/user'

import { api_token } from "../shared/api";

const SignUp = (props) => {
  const { modalClose } = props;

  const dispatch = useDispatch();

  const [login, setLogin] = React.useState(true);

  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");

  const changeBtn = () => {
    setLogin(!login);
  };
  // 데이터의 변화가 있을 때마다 value값 변경하여 useState 해준다
  const handleNickname = (e) => {
    setNickname(e.target.value);
    console.log(e.target.value);
  };

  const handlePw = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  const handlePwConfirm = (e) => {
    setPwConfirm(e.target.value);
    console.log(e.target.value);
  };

  const LoginBtn = () => {
    if (!nickname || !password) {
      window.alert("빈 칸을 채워주세요");
      return;
    }
    if (nickname.length < 3 || nickname.length > 10) {
      window.alert("닉네임은 3자 이상 10자 이하로 설정가능합니다");
    }
    nicknameCheck(nickname);
    pwCheck(password);
    // dispatch(loginAction.loginFB(nickname, password));
  };

  const SignUpBtn = () => {
    if (!nickname || !password || !pwConfirm) {
      window.alert("빈 칸을 채워주세요");
      return;
    }

    if (
      password.length < 4 ||
      pwConfirm.length < 4 ||
      password.length > 30 ||
      pwConfirm.length > 30
    ) {
      window.alert("비밀번호는 4자 이상 30자 이하로 설정가능합니다");
      return;
    }

    if (password !== pwConfirm) {
      window.alert("비밀번호가 일치하지 않습니다. 다시 한 번 입력해주세요");
      return;
    }

    if (password === nickname) {
      window.alert("비밀번호에는 아이디가 들어갈 수 없습니다.");
      return;
    }

    nicknameCheck(nickname);
    pwCheck(password, pwConfirm);
    //  dispatch(signUpAction.signUpFB(nickname, password));
  };

  return (
    <React.Fragment>
      <ModalContainer>
        <DIV>
          <SignUpImage />
          <Container>
            <ClearIcon className="modal__button" onClick={modalClose} />
            <h3>{login ? "로그인" : "회원가입"}</h3>
            <div style={{ display: "flex" }}>
              <InputForm
                onChange={handleNickname}
                placeholder="닉네임을 입력해주세요"
              />{" "}
            </div>
            <InputForm
              type="password"
              placeholder="비밀번호를 입력해주세요"
              is_submit
              onChange={handlePw}
            />

            {login ? (
              ""
            ) : (
              <InputForm
                type="password"
                vale="pwConfirm"
                placeholder="비밀번호를 한 번 더 입력해주세요"
                is_submit
                onChange={handlePwConfirm}
              />
            )}

            {login ? (
              <Button onClick={LoginBtn}>로그인</Button>
            ) : (
              <Button onClick={SignUpBtn}>회원가입</Button>
            )}

            <IsMember
              style={{ display: "flex", float: "right", alignItems: "center" }}
            >
              {login ? "아직 회원이 아니신가요?" : "계정이 이미 있으신가요?"}
              <TextWrap onClick={changeBtn}>
                {login ? "회원가입" : "로그인"}
              </TextWrap>
            </IsMember>
          </Container>
        </DIV>
      </ModalContainer>
    </React.Fragment>
  );
};

const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(249, 249, 249, 0.8);
  z-index: 20;
  position: fixed;
  top: 0;
  left: 0;
  /* #f9f9f9  */

  & .modal__button {
    position: absolute;
    right: 20px;
    cursor: pointer;
  }
`;

const DIV = styled.div`
  background-color: #fff;
  width: 606px;
  height: 480px;
  display: inline-flex;
  margin: auto;
  box-sizing: border-box;
  box-shadow: rgba(100, 100, 111, 0.2) 5px 5px 15px 0px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

const Container = styled.div`
  padding: 23px;
  box-sizing: border-box;
  position: relative;
`;

const SignUpImage = styled.div`
  min-width: 260px;
  height: 480px;
  box-sizing: border-box;
  background-color: #f9f9fa;
  background-image: url("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fl78ID%2FbtrtHDXfBDe%2FOgzYxiX4TMVkZKLykrYvr0%2Fimg.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const InputForm = styled.input`
  width: 246px;
  height: 48px;
  border: 0.5px solid #ccc;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #12b886;
  color: #fff;
  width: 96px;
  height: 51px;
  text-align: center;
  line-height: 48px;
  font-size: 1rem;
  font-weight: bold;
  display: inline-block;
  /* outline: none; */
  border: none;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  width: 6rem;
  word-break: keep-all;
  cursor: pointer;
`;

const IsMember = styled.div`
  position: absolute;
  bottom: 25px;
  right: 20px;
`;

const TextWrap = styled.div`
  color: #12b886;
  font-weight: bold;
  cursor: pointer;
  margin-left: 0.5rem;
`;

export default SignUp;
