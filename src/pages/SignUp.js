import React from "react";
import styled from "styled-components";
import { Image } from "../element/index";
import { history } from "../redux/ConfigStore";
import ClearIcon from '@mui/icons-material/Clear';

const SignUp = (props) => {
  const { modalClose, history } = props;

    const [login, setLogin] = React.useState(true);

  const changeBtn = () => {
    setLogin(!login);
  };

  return (
    <React.Fragment>
        <ModalContainer >
        <div className="modal">
      <DIV>
        <SignUpImage />
        <Container>
        <ClearIcon className="modal__button" onClick={modalClose} />
          <h3>{login ? '로그인' : '회원가입'}</h3>
          <div style={{ display: "flex" }}>
            <InputForm placeholder="아이디를 입력해주세요" />
              {/* <Button>중복확인</Button> */}
          </div>
          {login ? "" : <InputForm
            placeholder="닉네임을 입력해주세요"
            is_submit
          /> }
          
          <InputForm
            type="password"
            placeholder="비밀번호를 입력해주세요"
            is_submit
          />

          {login ? "" : <InputForm
            type="password"
            placeholder="비밀번호를 한 번 더 입력해주세요"
            is_submit
          /> }
          
          {login ? 
          <Button>로그인</Button> 
          :
          <Button>회원가입</Button>}
          
          <IsMember
            style={{ display: "flex", float: "right", alignItems: "center" }}
          >
            {login ? '아직 회원이 아니신가요?' : '계정이 이미 있으신가요?'}
            <TextWrap onClick={changeBtn}>{login ? '회원가입' : '로그인'}</TextWrap>
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

    & .modal__button{
        position:absolute;
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
bottom: 30px;
right: 20px
`

const TextWrap = styled.div`
  color: #12b886;
  font-weight: bold;
  cursor: pointer;
  margin-left: 0.5rem;
`;

export default SignUp;
