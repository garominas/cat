import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../redux/actions";
import Loader from "react-loader-spinner";

import styled from "styled-components";
const BoxWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 25px
    
`;
const ImageDivWrap = styled.div`
    width: 400px;
    height: 400px;
    margin: 30px;
`
const ImageWrap = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px 50px;
    transition: 1s;

    &:hover {
        border-radius: 50px 10px;
        transform: scale(0.9);
    }
`


const Boxes = () => {
    const [countImage, setCountImage] = useState([]);

    const { images } = useSelector(state => state.categoryImage);
    const { id } = useSelector(state => state.categoryId);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getImages(10, 1, id))
    }, [id])

    useEffect(() => {
        images && setCountImage(images)
    }, [images])

    return (
        <BoxWrap>
            {
                countImage.length ? countImage.map((item, index) => {
                    return (
                        <ImageDivWrap key={index}>
                            <ImageWrap src={item.url} alt="png" />
                        </ImageDivWrap>
                    )
                }) : <Loader type="Circles" />
            }
        </BoxWrap>
    )
};

export default Boxes;