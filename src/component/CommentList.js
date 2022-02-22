import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {actionCreators as commontActions} from '../redux/modules/comment';
import moment from 'moment';
import CommentWrite from './CommentWrite';



const CommentList = (props) => {

    const {post_id} = props;

    const dispatch = useDispatch();
    const comment_list = useSelector(state => state.comment.list);

    // console.log('comment_list !! ', comment_list);

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
        <CommentWrite post_id={post_id} />
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

    const [hide, setHide] = useState(false);

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
                    <Text2 className={hide ? 'hide' : ""} onClick={() => setHide(true)}>수정</Text2>
                    <Text2 className={hide ? 'hide' : ""} >삭제</Text2>
                </BtnBox>
            </UserBox>
                <Text className={hide ? 'hide' : ""} style={{margin: "20px 0"}}>{props.commentBody}</Text>
                <UpdateCon className={hide ? '' : "hide"}>
                    <UpdateText placeholder={props.commentBody}/>
                    <UpBtnCon>
                        <UpCancelBtn onClick={() => setHide(false)}>취소</UpCancelBtn>
                        <UpdateBtn>댓글 수정</UpdateBtn>
                    </UpBtnCon>
                </UpdateCon>
                {/* <CommentBtn>답글 달기</CommentBtn>
                <ReplyCon>
                    <Replytext placeholder='댓글을 작성하세요'/>
                </ReplyCon> */}

        </Container>
    )
}

const UpdateCon = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;

const UpdateText = styled.textarea`
    resize: none;
    padding: 1rem 1rem 1.5rem;
    outline: none;
    border: 1px solid #F1F3F5;
    margin-bottom: 1.5rem;
    border-radius: 4px;
    min-height: 2.125rem;
    font-size: 1rem;
    color: black;
    line-height: 1.75;
    background: #FFFFFF;
    font-weight: 500;
`;

const UpBtnCon = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const UpCancelBtn = styled.button`
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
    outline: none;
    border: none;
    background: none;
    color: #12B886;
    border-radius: 4px;
    padding: 0px 1.25rem;
    height: 2rem;
    font-size: 1rem;
    :hover {
        background-color: rgba(0,0,0,0.05);
    }
`;

const UpdateBtn = styled.button`
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
    outline: none;
    border: none;
    background: #12B886;
    color: #FFFFFF;
    border-radius: 4px;
    padding: 0px 1.25rem;
    height: 2rem;
    font-size: 1rem;
`;

const Container = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid #E9ECEF;

    .hide {
        display: none;
    }

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

const CommentBtn = styled.span`
    color: #20C997;
    font-weight: bold;
    cursor: pointer;
`;

const ReplyCon = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.02);
    background-color: rgba(0, 0, 0, 0.016);
    padding: 1.5rem;
    border-radius: 4px;
    margin-top: 1.3125rem;
    display: flex;
    flex-direction: column;
`;

const Replytext = styled.textarea`
    resize: none;
    padding: 1rem 1rem 1.5rem;
    outline: none;
    border: 1px solid #F1F3F5;
    margin-bottom: 1.5rem;
    border-radius: 4px;
    min-height: 2.125rem;
    font-size: 1rem;
    color: #212529;
    line-height: 1.75;
    background: #FFFFFF;
`;

const BtnCon = styled.div`

`;

const CancelBtn = styled.button`

`;

const ReplyBtn = styled.button`

`;


export default CommentList;