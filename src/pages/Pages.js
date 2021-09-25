//react
import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
//redux
import { useDispatch, useSelector } from 'react-redux';

//componets
import Content from './Content/Content';
import SideBar from './SideBar/SideBar';
import NextBtn from '../components/NextBtn';

import actions from '../redux/actions';

//styles
import styled from 'styled-components';

const PagesWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const Pages = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    const { categories } = useSelector(state => state.categoryList)

    useEffect(() => {
        if (location.pathname === '/') {
            dispatch(actions.getImages(10, 1, categories.map(item => {
                item.Math.floor(Math.random(item))
            })))
        }
        dispatch(actions.getCategories())
    }, [])

    return (
        <PagesWrap>
            <SideBar />
            <div>
                <Content />
                <NextBtn />
            </div>
        </PagesWrap>
    )
};

export default Pages;