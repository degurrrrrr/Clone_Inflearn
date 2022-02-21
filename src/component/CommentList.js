import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {actionCreators as commontActions} from '../redux/modules/comment';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const CommentList = (props) => {

    const {post_id} = props;

    const dispatch = useDispatch();
    // const comment_list = useSelector(state => state.comment.list);

    React.useEffect(() => {
        // if(!comment_list[post_id]){
        //     dispatch(commontActions.getCommentFB(post_id));
        // }
    }, []);

    // if(!comment_list[post_id] || !post_id){
    //     return null;
    // }

    return(
    <React.Fragment>
        <CommentItem />
    </React.Fragment>
    )
}

CommentList.defaultProps = {
    post_id: null
}


const CommentItem = (props) => {



    return (
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