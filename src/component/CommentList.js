import React from 'react';
import styled from 'styled-components';

const CommentList = () => {
    return(
    <React.Fragment>
        <Container>
            <UserBox>
                <ProfileImg />
                <Info>
                    <Text style={{fontWeight: "bold"}}>sws1552</Text>
                    <Text style={{color: "#868E96"}}>2022-02-19</Text>
                </Info>
            </UserBox>
                <Text style={{margin: "20px 0"}}>때려 치고 싶다</Text>
        </Container>
    </React.Fragment>
    )
}

const Container = styled.div`
    border-bottom: 1px solid #E9ECEF;
`;

const UserBox = styled.div`
    display: flex;
    align-items: center;
`;

const ProfileImg = styled.div`
    width: 60px;
    height: 60px;
    background-image: url("https://ilovecharacter.com/news/data/20210122/p179568629887999_597.jpg");
    background-position: center;
    background-size: cover;
    border-radius: 30px;
`;

const Info = styled.div`
    margin-left: 20px;
    display:flex;
    flex-direction: column;
`;

const Text = styled.div`

`;

export default CommentList;