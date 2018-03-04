import { combineReducers } from 'redux';

import companyList from './companyList';
import companyArticle from './companyArticle';
import companyReviewList from './companyReviewList'
import companyDetailButton from './companyDetailButton'

export default combineReducers({
  companyList,
  companyArticle,
  companyReviewList,
  companyDetailButton,
});
