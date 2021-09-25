const initialeState = {
    categories: []
}

const categoryList = (state = initialeState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_CATEGORIES':
            return {
                ...state,
                categories: payload
            }
        default:
            return state
    }
}

export default categoryList;