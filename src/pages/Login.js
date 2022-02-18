import React from "react";
import styled from "styled-components";
import { Image, Input } from "../element/index";

const Login = (props) => {
  const { modalClose } = props;

  return (
    <React.Fragment>
      <ModalContainer>
        <div className="modal">
          <button className="modal__button" onClick={modalClose}>
            창 닫기
          </button>
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
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 5px 5px 15px 0px;
  }
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
`;

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

export default Login;
