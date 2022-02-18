import React from 'react';
import styled from 'styled-components';





const Login = (props) => {

    const {modalClose} = props;

    return (
        <React.Fragment>
            <ModalContainer>
                <div className='modal'> 
                    <button className='modal__button' onClick={modalClose}>창 닫기</button>
                </div>
            </ModalContainer>
        </React.Fragment>
    )
}

const ModalContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(249,249,249,0.8);
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
        top:50%;
        transform: translate(-50%, -50%);
        z-index:100;
    }

    & .modal__button {
        position: relative;
        left: 50%;
        top:50%;
        transform: translate(-50%, -50%);
    }


`;




export default Login;