import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

const SideBartWrap = styled.div`
    width: 1000px;
`

const UlWrap = styled.div`
    margin-top: 20px;
    margin-left: 20px;
    a {
        margin-top: 15px;
        text-decoration: none;
        font-size: 25px;
    }
`

const SideBar = () => {
    const dispatch = useDispatch()
    const { categories } = useSelector(state => state.categoryList)

    const handle = (id) => {
        dispatch({
            type: "CLEAR_IMAGES"
        });
        dispatch({
            type: "SET_ID",
            payload: id
        })
    }

    return (
        <SideBartWrap>
            {
                categories && categories.map((item, index) => {
                    return (
                        <UlWrap key={index}>
                            <Link onClick={() => handle(item.id)} to={`/${item.name}`}>{item.name}</Link>
                        </UlWrap>
                    )
                })
            }
        </SideBartWrap>
    )
};

export default SideBar;