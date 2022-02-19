import React, { createRef, useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import {Editor} from '@toast-ui/react-editor';

import Prism from 'prismjs';

import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import styled from 'styled-components';




const Write = () => {

    const editorRef = useRef();

    const onChangeeditorTextHandler = () => {
        console.log(editorRef.current.getInstance().getMarkdown());
    }

    return(
    <React.Fragment>
        <Container>
            <Title placeholder='제목을 입력하세요.'></Title>
            <Editor
            previewStyle='vertical'
            height='80vh'
            initialEditType='markdown'
            placeholder='당신의 이야기를 적어보세요...'
            ref={editorRef}
            plugins={[colorSyntax, [codeSyntaxHighlight, {highlighter: Prism}]]}
            onChange={onChangeeditorTextHandler} 
            autofocus={false}
            />
            
        </Container>
        <WriteFooter>
            <ExitBtn>나가기</ExitBtn>
            <SaveBtn>출간하기</SaveBtn>            
        </WriteFooter>
        
    </React.Fragment>
    )
}

const Title = styled.textarea`
    height: 66px;
    background: transparent;
    display: block;
    padding: 0px;
    font-size: 2.75rem;
    width: 100%;
    resize: none;
    line-height: 1.5;
    outline: none;
    border: none;
    font-weight: bold;
    color: #212529;
    font-family: inherit;
`;

const Container = styled.div`
    background-color: white;
    height: 100%;
    min-height: 90vh;
    padding: 20px;
`;

const WriteFooter = styled.div`
    position: fixed;
    bottom: 0;
    height: 4rem;
    width: 100%;
    background-color: #ffffff;
    box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
`;

const ExitBtn = styled.button`
    margin: 0 1.25rem;
    height: 2.5rem;
    padding: 0.5rem 1rem;
    -webkit-box-align: center;
    align-items: center;
    background: none;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    display: flex;
    outline: none;
    font-size: 1.2rem;
    &:hover {
        background-color: #e9ecef;
    }
`;

const SaveBtn = styled.button`
    font-weight: bold;
    cursor: pointer;
    outline: none;
    border: none;
    background: #12B886;
    color: white;
    border-radius: 4px;
    padding: 0px 1.25rem;
    margin: 0 1.25rem;
    height: 2.5rem;
    font-size: 1.125rem;
    &:hover {
        opacity: 0.7;
    }
`;

export default Write;