import React from "react";
import styled from "styled-components";
import { Grid } from "../element";
import LogoImg from "../images/velog 로고.png"
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const Header = (props) => {
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

                    </HeadItem>
                </Wrap>
           </HeaderContainer>
        </React.Fragment>
    )
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

`;



export default Header;