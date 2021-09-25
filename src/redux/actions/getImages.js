import axios from "axios";
import request from "../../api";

const getImages = (limit = 10, pageCount = 1, id = 1) => dispatch => axios({
    url: request.GET_IMAGES + `?limit=${limit}&page=${pageCount}&category_ids=${id}`
}).then(res => {
    console.log(res)
    dispatch({
        type: 'SET_IMAGES',
        payload: res.data
    })
    dispatch({
        type: 'SET_ID',
        payload: id
    })
})

export default getImages;