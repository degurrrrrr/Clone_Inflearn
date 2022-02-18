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
    min-height: 80vh;
    padding: 20px;
`;

export default Write;