import axios from "axios";

import requests from './../../api';

const getCategories = () => dispatch => axios({
    url: requests.GET_CATIGORIES
}).then(res => {
    dispatch({
        type: "SET_CATEGORIES",
        payload: res.data
    })
})

export default getCategories;