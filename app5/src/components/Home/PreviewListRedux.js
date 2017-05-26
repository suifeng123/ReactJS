const initialState = {
    loading: true,
    error: false,
    articleList: [],
};

const LOAD_ARTICLES = 'LOAD_ARTICLES';
const LOAD_ARTICLES_SUCESS = 'LOAD_ARTICLES_SUCESS';
const LOAD_ARTICLES_ERROR =  'LOAD_ARTICLES_ERROR';

export function loadArticles() {
    return {
        types: [LOAD_ARTICLES,LOAD_ARTICLES_SUCESS,LOAD_ARTICLES_ERROR],
        url: '/api/articles.json',
    };
}

function previewList(state = initialState,action) {
    switch (action.type) {
        case LOAD_ARTICLES: {
            return {
                ...state,
                loading: true,
                error: false,
            };
        }

        case LOAD_ARTICLES_SUCESS: {
            return {
                ...state,
                loading:false,
                error: false,
                articleList: action.payload.articleList,
            };
        }

        case LOAD_ARTICLES_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
            };
        }

        default:
            return state;
    }
}

export default previewList;