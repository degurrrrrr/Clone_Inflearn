import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import LogoImg from "../images/velog 로고.png"
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import SearchIcon from '@mui/icons-material/Search';

import SignUp from "../pages/SignUp";
import { Grid } from "../element";
import { actionCreators as userActions } from "../redux/modules/user";


const Header = (props) => {
    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = React.useState(false);
    const modalClose = () => {
        setModalOpen(!modalOpen);
    }

    // const is_login = useSelector((state) => state.user.is_login);
    // const _logOut = () => {
    //     dispatch(userActions.logOut())
    // };

    // if(is_login){
    //     return (
    //         <React.Fragment>
    //            <HeaderContainer>    
    //                 <Wrap>
    //                     <Logo>
    //                         <a href="/">
    //                             <img src={LogoImg} alt="로고"/>
    //                         </a>
    //                     </Logo>
    //                     <HeadItem>
    //                         <WbSunnyIcon style={{marginLeft: "20px"}}/>
    //                         <SearchIcon style={{marginLeft: "20px"}} />
    //                         <LoginBtn onClick={_logOut}>로그아웃</LoginBtn>
    //                     </HeadItem>
    //                 </Wrap>
    //            </HeaderContainer>
    //         </React.Fragment>
    //     )
    // };
    
    return (
        <React.Fragment>
           <HeaderContainer>    
                <Wrap>
                    <Logo>
                        <a href="/">
                            <img src={LogoImg} alt="로고"/>
                        </a>
                    </Logo>
                    <HeadItem>
                        <WbSunnyIcon style={{marginLeft: "20px"}}/>
                        <SearchIcon style={{marginLeft: "20px"}} />
                        <LoginBtn onClick={modalClose}>로그인</LoginBtn>
                        {modalOpen && <SignUp modalClose={modalClose}></SignUp>}
                    </HeadItem>
                </Wrap>
           </HeaderContainer>
        </React.Fragment>
    );

}

const HeaderContainer = styled.div`
    height: 4rem;
    
`;

const Wrap = styled.div`
    height: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 0 5%;
    @media screen and (max-width: 1024px) {
        margin:0 1%;    
    }
`;

const Logo = styled.div`
    
`;

const HeadItem = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
`;

const LoginBtn = styled.button`
    margin-left: 20px;
    height: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1rem;
    border-radius: 1rem;
    border: none;
    outline: none;
    font-weight: bold;
    word-break: keep-all;
    background-color: black;
    color: white;
    transition: all 0.125s ease-in 0s;
    cursor: pointer;
`;


export default Header;