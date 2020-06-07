export const ACT_ARTICLE_STORE = 'ACT_ARTICLE_STORE';
export const ACT_ARTICLE_LIST = 'ACT_ARTICLE_LIST';
export const ACT_ARTICLE_DELETE = 'ACT_ARTICLE_DELETE';
export const ACT_ARTICLE_UPDATE = 'ACT_ARTICLE_UPDATE';

export const storeArticles = articles => ({
    type: ACT_ARTICLE_STORE,
    articles
});

export const getAllArticles = () => ({
    type: ACT_ARTICLE_LIST
});

export const deleteAnArticle = article => ({
    type: ACT_ARTICLE_DELETE,
    article
});

export const updateAnArticle = article => ({
    type: ACT_ARTICLE_UPDATE,
    article
});
