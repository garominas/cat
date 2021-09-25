import React from 'react';
import { Switch, Route } from 'react-router-dom';
//componets
import Boxes from './components/Boxes';
import Clothes from './components/Clothes';
import Random from './components/Random';
import Hats from './components/Hats';
import Sinks from './components/Sinks';
import Space from './components/Space';
import Sunglasses from './components/Sunglasses';
import Ties from './components/Ties';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


//styles
import styled from 'styled-components';
const ContentWrap = styled.div`
    margin-left: 200px;
`
const Content = () => {
    return (
        <ContentWrap>
            <Switch>
                <Route exact path="/">
                    <Random />
                </Route>
                <Route exact path="/boxes">
                    <Boxes />
                </Route>
                <Route exact path="/clothes">
                    <Clothes />
                </Route>
                <Route exact path="/hats">
                    <Hats />
                </Route>
                <Route exact path="/sinks">
                    <Sinks />
                </Route>
                <Route exact path="/space">
                    <Space />
                </Route>
                <Route exact path="/ties">
                    <Ties />
                </Route>
                <Route exact path="/sunglasses">
                    <Sunglasses />
                </Route>
            </Switch>
        </ContentWrap>
    )
};

export default Content;