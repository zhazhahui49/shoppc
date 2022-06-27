import { request } from './request.js';
//添加
export function addCart(data) {
    return request({
        url: '/api/carts',
        method: 'post',
        data
    });
}

//修改购物车
export function modifyCart(id, data) {
    return request({
        url: `/api/carts/${id}`,
        method: 'put',
        data
    });
}
// 选择状态
export function checkedcart(data) {
    return request({
        url: '/api/carts/checked',
        method: 'patch',
        data
    });
}
// 获取购物车列表
export function getCart(data) {
    return request({
        url: '/api/carts?'+data,
        method: 'get'
    });
}
// 删除购物车
export function deleCart(id) {
    return request({
        url: `/api/carts/${id}`,
        method: 'delete',
    });
}

