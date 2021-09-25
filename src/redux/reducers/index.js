import { combineReducers } from 'redux';

//reducers
import categoryList from './categoryList';
import categoryId from './categoryId';
import categoryImage from './categoryImage';

const Reducers = combineReducers({
    categoryList,
    categoryId,
    categoryImage
})

export default Reducers;

