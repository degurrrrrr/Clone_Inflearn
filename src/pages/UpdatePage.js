import React, { createRef, useRef } from 'react';

import {history} from '../redux/ConfigStore';

import '@toast-ui/editor/dist/toastui-editor.css';
import {Editor} from '@toast-ui/react-editor';

import Prism from 'prismjs';

import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import styled from 'styled-components';

import { api } from '../shared/api';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {actionCreator as postActions} from '../redux/modules/post';



const UpdatePage = (props) => {

    const postId = props.match.params.id;
    const post_one = useSelector((state) => state.post.one_post);

    const dispatch = useDispatch();

    const [title, setTitle] = React.useState('');

    const editorRef = useRef();

    React.useEffect(() => {
        dispatch(postActions.getOnePostFB(postId));

        editorRef.current.getInstance().setHTML('<p><img src="http://14.45.204.153:8023/%ED%95%98%EB%8A%98%EC%9D%B4_1645344158419.jpg" contenteditable="false"><img class="ProseMirror-separator"><br class="ProseMirror-trailingBreak"></p><p><br class="ProseMirror-trailingBreak"></p><p><strong>dfsdafsdafsafsadf</strong></p><h3>sdfasfdsafasdfdsfas</h3><p><em>sdfasfsafasfsafasfasf</em></p><p><br class="ProseMirror-trailingBreak"></p><p><del>sfdafsfsadfsfasfasfdsfasf</del></p>');

    }, []);

    React.useEffect(() => {
        if(editorRef.current){
            // 기존의 imageUpload hook 제거
            editorRef.current.getInstance().removeHook("addImageBlobHook");

            // 새로운 imageUpload hook 생성
            editorRef.current.getInstance().addHook("addImageBlobHook", (blob, callback) => {
                (async () => {
                    let formData = new FormData();
                    formData.append("image", blob);

                    try{

                        const result = await axios.post('http://14.45.204.153:8023/api/image', 
                            formData,
                            {
                                headers: {
                                    "content-type": "multipart/formdata"
                                }
                            },
                        );

                        const imageSrc = 'http://14.45.204.153:8023/'+result.data;

                        callback(imageSrc);

                    }catch(error) {
                        console.log(error);
                    }

                })();
                return false;
            })
        }

        return () => {};

    }, [editorRef]);

    const postUpdate = () => {

        if(title === ''){
            window.alert('제목을 작성해주세요~');
            return;
        }

        const context = editorRef.current.getInstance().getHTML();        
        console.log(context);
        
        let span = document.createElement("span");
        span.innerHTML = context;

        // 미리보기 추출
        const extractedText = span.textContent || span.innerText;
        const preview = extractedText.slice(0, 70);

        
        dispatch(postActions.updateOnePostFB(postId, title, context, preview));

    }

    return(
    <React.Fragment>
        <Container>
            <Title placeholder='제목을 입력하세요.' onChange={(e) => {
                setTitle(e.target.value);
            }}></Title>
            <Editor
            ref={editorRef}
            previewStyle='vertical'
            height='80vh'
            useCommandShortcut={true}
            placeholder='당신의 이야기를 적어보세요...'
            usageStatistics={false}
            plugins={[colorSyntax, [codeSyntaxHighlight, {highlighter: Prism}]]}
            autofocus={false}
            toolbarItems={[
                ["heading"],
                ["bold", "italic", "strike"],
                ["quote", "link", "image", "codeblock"],
            ]}
            />
            
        </Container>
        <WriteFooter>
            <ExitBtn onClick={() => {
                history.goBack();
            }}>나가기</ExitBtn>
            <SaveBtn onClick={postUpdate}>수정하기</SaveBtn>            
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

export default UpdatePage;