import React from 'react';

import Header from '../component/Header';
import Post from '../component/Post';
import Menu from '../component/Menu';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {api_token} from '../shared/api';

const SpecificList = (props) => {
    // const specificList = useSelector

    const userId = props.match.params.userId
    
    return (
        <React.Fragment>
            <Header />
            <Menu />
            <Post />
            {/* {post_list.map((p, id) => {
            return <Post key={id} {...p} />;
          })} */}
        </React.Fragment>
    )
}

export default SpecificList;