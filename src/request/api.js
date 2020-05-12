import http from "./http";

export const getLunbo = async (data) => {
    let url = '/api/lunbo';
    let result = await http({
        method: 'get',
        url,
        params: data
    })
    return result;
}
//热门小说
export const getHotFiction = async (data) => {
    let url = '/api/hotfiction';
    let result = await http({
        method: 'get',
        url,
        params: data
    })
    return result;
}
//免费小说
export const getFreeFiction = async (data) => {
    let url = '/api/freefiction';
    let result = await http({
        method: 'get',
        url,
        params: data
    })
    return result;
}
//新书抢鲜
export const getNewFiction = async (data) => {
    let url = '/api/newfiction';
    let result = await http({
        method: 'get',
        url,
        params: data
    })
    return result;
}

//轻小说
export const getQingFiction = async (data) => {
    let url = '/api/qingfiction';
    let result = await http({
        method: 'get',
        url,
        params: data
    })
    return result;
}

//小说介绍
export const getBookInfo = async (data) => {
    let url = `/api/book/${data.bid}`;
    let result = await http({
        method: 'get',
        url,
        params: data
    })
    return result;
}

//小说章节内容
export const getArticle = async (data) => {
    let url = `/api/article`;
    let result = await http({
        method: 'get',
        url,
        params: data
    })
    return result;
}

//分类
export const getCategory = async (data) => {
    let url = `/api/category`;
    let result = await http({
        method: 'get',
        url,
        params: data
    })
    return result;
}

//分类详情
export const getCategoryDetail = async (data) => {
    let url = `/api/category/detail`;
    let result = await http({
        method: 'get',
        url,
        params: data
    })
    return result;
}

//搜索
export const getSearch = async (data) => {
    let url = `/api/search`;
    let result = await http({
        method: 'get',
        url,
        params: data
    })
    return result;
}

//排行榜
export const getRank = async (data) => {
    let url = `/api/rank`;
    let result = await http({
        method: 'get',
        url,
        params: data
    })
    return result;
}

//排行榜详情
export const getRankDetail = async (data) => {
    let url = `/api/rankDetail`;
    let result = await http({
        method: 'get',
        url,
        params: data
    })
    return result;
}