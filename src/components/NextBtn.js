import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../redux/actions";

import styled from "styled-components";

const BtnDiv = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  margin: 20px 0px;
  align-items: center;
  justify-content: center;
`;

const BtnWrap = styled.button`
  margin: 0px 8px;
  padding: 25px 59px;
  font-size: 16px;
  border: none;
  outline: none;
  cursor: pointer;
  color: #ffa959;
  background-color: darkblue;
  border-radius: 10px;

`;

const NextBtn = () => {

    const [count, setCount] = useState(10);
    const [countPage, setCountPage] = useState(1);

    const dispatch = useDispatch();

    const { id } = useSelector(state => state.categoryId)

    useEffect(() => {
        if (countPage > 1) {
            dispatch(actions.getImages(count, countPage, id))
        }
    }, [countPage])

    return (
        <BtnDiv>
            <BtnWrap onClick={() => setCountPage(prev => prev + 1)}>next</BtnWrap>
        </BtnDiv>
    )
};

export default NextBtn