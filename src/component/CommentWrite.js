
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {actionCreators as commentActions} from "../redux/modules/comment";



const CommentWrite = (props) => {

    const {post_id} = props;

    const commentRef = useRef();

    const [comment, setComment] = useState('');

    const dispatch = useDispatch();

    const commentAdd = () => {
        dispatch(commentActions.addCommentFB(post_id, comment));
        commentRef.current.value = "";
    }

    return(
        <React.Fragment>
            <Wrap>
                <Comment ref={commentRef} onChange={(e) => {
                    setComment(e.target.value);
                }} placeholder='댓글을 작성하세요'></Comment>
                <BtnWrap>
                    <CommentBtn onClick={commentAdd}>댓글 작성</CommentBtn>
                </BtnWrap>
            </Wrap>
        </React.Fragment>
    )
}

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const Comment = styled.textarea`
    resize: none;
    padding: 1rem 1rem 1.5rem;
    outline: none;
    border: 1px solid #F1F3F5;
    margin-bottom: 1.5rem;
    border-radius: 4px;
    min-height: 3.125rem;
    font-size: 1rem;
    color: #212529;
    line-height: 1.75;
    background: #FFFFFF;
`;

const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const CommentBtn = styled.button`
    width: 110px;
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

export default CommentWrite;