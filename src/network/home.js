import {request} from './request.js';
export function getHomeAllData(){
    return request({
        url: '/api/index',
        method:'get',
      });
}

export function getHomegoods(type='sales',page=1){
  return request({
      url: '/api/index?'+type+'=1&page='+page,
      method:'get',
    });
}