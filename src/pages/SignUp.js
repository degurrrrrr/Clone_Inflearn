import React from "react";
import styled from "styled-components";
import { Image, Input } from "../element/index";

const SignUp = () => {
    return(
    <React.Fragment>
      <DIV>
        <SignUpImage />
        <div>
          <div>회원가입</div>
          <Input is_submit>아이디</Input>
          <div>비밀번호</div>
          <div>비밀번호 재확인</div>
          <Button>회원가입</Button>
          <div>
            아직 회원이 아니신가요? <span>회원가입</span>
          </div>
        </div>
      </DIV>
    </React.Fragment>
  );
};

const DIV = styled.div`
background-color: #fff;
  width: 606px;
  height: 480px;
  display: inline-flex;
`;

const SignUpImage = styled.div`
  width: 260px;
  height: 480px;
  background-color: #f9f9fa;
  background-image: url("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fl78ID%2FbtrtHDXfBDe%2FOgzYxiX4TMVkZKLykrYvr0%2Fimg.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const InputForm = styled.div`
width: 246px;
`

const Button = styled.div`
  background-color: #12b886;
  color: #fff;
  width: 96px;
  height: 48px;
  text-align: center;
  line-height: 48px;
  font-size: 1rem;
  font-weight: bold;
  /* outline: none; */
  border: none;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  width: 6rem;
  word-break: keep-all;
  cursor: pointer;
`;


export default SignUp;