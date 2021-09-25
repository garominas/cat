const initialeState = {
    images: []
};

const categoryImage = (state = initialeState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_IMAGES':
            return {
                ...state,
                images: [
                    ...state.images,
                    ...payload
                ]
            }
        case 'CLEAR_IMAGES':
            return {
                ...state,
                images: []
            }
        default:
            return state
    }

}

export default categoryImage;