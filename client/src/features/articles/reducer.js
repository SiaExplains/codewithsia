import { ACT_ARTICLE_LIST, ACT_ARTICLE_STORE } from './actions';

export default (state = [], action) => {
    switch (action) {
        case ACT_ARTICLE_STORE:
            return action.articles;
        case ACT_ARTICLE_LIST:
            let articles = [...state];
            return articles;
        default:
            return state;
    }
};
