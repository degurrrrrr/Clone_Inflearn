import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {actionCreators as commontActions} from '../redux/modules/comment';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import moment from 'moment';
import { style } from '@mui/system';


const CommentList = (props) => {

    const {post_id} = props;

    const dispatch = useDispatch();
    const comment_list = useSelector(state => state.comment.list);

    console.log('comment_list !! ', comment_list);

    React.useEffect(() => {
        if(!comment_list[post_id]){
            dispatch(commontActions.getCommentFB(post_id));
        }
    }, []);

    if(!comment_list[post_id] || !post_id){
        return null;
    }

    return(
    <React.Fragment>
        {comment_list[post_id].map((item, i) => {
            return <CommentItem key={item.id} {...item} />
        })}
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
                <div style={{display:"flex", alignItems: "center"}}>
                    <ProfileImg />
                    <Info>
                        <Text style={{fontWeight: "bold"}}>{props.userId}</Text>
                        <Text style={{color: "#868E96"}}>{moment(props.createdAt).format('YYYY-MM-DD')}</Text>
                    </Info>
                </div>
                <BtnBox>
                    <Text2>수정</Text2>
                    <Text2>삭제</Text2>
                </BtnBox>
            </UserBox>
                <Text style={{margin: "20px 0"}}>{props.commentBody}</Text>

        </Container>
    )
}


const Container = styled.div`
    margin-top: 20px;
    border-bottom: 1px solid #E9ECEF;
`;

const UserBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const BtnBox = styled.div`
    display: inline-flex;
    justify-content: flex-end;
`;

const Text2 = styled.span`
    font-size: 0.875rem;
    color: #868e96;
    margin-left: 10px;
    cursor: pointer;
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