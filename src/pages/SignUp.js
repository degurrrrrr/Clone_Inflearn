import React from "react";
import styled from "styled-components";
import { Image } from "../element/index";
import { history } from "../redux/ConfigStore";

const Login = (props) => {
  const { modalClose, history } = props;

  const ToSignUp = () => {
    // state나 value를 signup으로 바꿔주는것
    window.alert("회원가입화면으로!");
  };

  const ToLogin = () => {
    // state나 value를 login으로 바꿔주는것
    window.alert("로그인화면으로!");
  };

  return (
    <React.Fragment>
        <ModalContainer>
        <div className="modal">
      <DIV>
        <SignUpImage />
        <Container>
          <h3>회원가입</h3>
          <div style={{ display: "flex" }}>
            <form>
              <InputForm placeholder="아이디를 입력해주세요" />
              {/* <Button>중복확인</Button> */}
            </form>
          </div>
          <InputForm
            type="password"
            placeholder="비밀번호를 입력해주세요"
            is_submit
          />
          <InputForm
            type="password"
            placeholder="비밀번호를 한 번 더 입력해주세요"
            is_submit
          />
          <Button>회원가입</Button>
          <IsMember
            style={{ display: "flex", float: "right", alignItems: "center" }}
          >
            계정이 이미 있으신가요?
            <TextWrap onClick={ToLogin}>{""}로그인</TextWrap>
          </IsMember>

          {/* 클릭하면 div의 value 값이 */}
          <button className="modal__button" onClick={modalClose}>
            창 닫기
          </button>
        </Container>
      </DIV>
      </div>
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
  & .modal {
    width: 300px;
    height: 150px;
    background-color: #fff;
    // Modal 창 브라우저 가운데로 조정
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
  }

  & .modal__button {
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
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
bottom: 30px;
right: 20px
`

const TextWrap = styled.div`
  color: #12b886;
  font-weight: bold;
  cursor: pointer;
  margin-left: 0.5rem;
`;

export default Login;
