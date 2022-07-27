import request from '@/server'

import { ArticleParamsType, ArticleListType, CommentType } from './type'

// 请求文章列表
export const getArticleList = (params?: ArticleParamsType) => {
  return request.get<ArticleListType>({
    url: '/article',
    params: params ?? {}
  })
}

// 请求文章详情
export const getArticleDetail = (id: string) => {
  return request.get<ArticleListType>({
    url: '/article',
    params: {
      id
    }
  })
}

// 请求文章评论
export const getArticleComment = (id: string) => {
  return request.get<{
    count: number
    comments: CommentType[]
  }>({
    url: '/article/comment',
    params: {
      id
    }
  })
}

// 发表文章评论
export const postArticleComment = (blog_id: string, content: string) => {
  return request.post({
    url: '/article/comment',
    data: {
      blog_id,
      content
    }
  })
}

// 回复文章评论
export const replyArticleComment = (
  blogId: string,
  content: string,
  commentId: number
) => {
  return request.post({
    url: '/article/reply',
    data: {
      blogId,
      content,
      commentId
    }
  })
}

// 点赞、取消点赞 文章
export const likeArticle = (id: number) => {
  return request.get({
    url: `/article/${id}/like`
  })
}
