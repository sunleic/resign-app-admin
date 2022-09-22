// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取项目列表 GET /api/rule */
export async function project(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<RESIGN_API.ProjectList>('/api/project', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新建项目 PUT /api/rule */
export async function updateProject(options?: { [key: string]: any }) {
  return request<RESIGN_API.ProjectListItem>('/api/project', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** 新建项目 POST /api/rule */
export async function addProject(options?: { [key: string]: any }) {
  return request<RESIGN_API.ProjectListItem>('/api/project', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除项目 DELETE /api/rule */
export async function removeProject(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/project', {
    method: 'DELETE',
    ...(options || {}),
  });
}
