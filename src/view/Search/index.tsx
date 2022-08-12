import React, { useState, useEffect } from 'react'

import { getArticleList } from '@/api/article'
import { ArticleType, ArticleParamsType } from '@/api/article/type'

import SearchArticle from '@/components/SearchArticle'
import { SearchStyle } from './styled'

function Search() {
  const [key, setKey] = useState('')
  const [searchArticle, setSearchArticle] = useState<ArticleType[]>([])
  const [updateArticle, setUpdateArticle] = useState<ArticleType[]>([])

  const getList = async (params: ArticleParamsType) => {
    await getArticleList(params).then((res) => {
      if (params.key) {
        setSearchArticle(res.data.articles)
      } else {
        setUpdateArticle(res.data.articles)
      }
    })
  }

  const search = () => {
    if (key.trim()) {
      getList({ key })
    }
  }

  useEffect(() => {
    getList({ orderName: 'updated' })
  }, [])

  return (
    <SearchStyle>
      <div className="search-header">
        <input
          value={key}
          onChange={(e) => setKey(e.target.value)}
          className="search-input"
          type="text"
          placeholder="输入搜索关键字，按回车(Enter)搜索"
          onKeyDown={(e) => e.key === 'Enter' && search()}
        />
        <div className="btn" onClick={search}>
          <i className="iconfont icon-sousuo" />
        </div>
      </div>
      <div className="list">
        <div className="search-res">
          <div className="title">
            <i className="iconfont icon-sousuojieguo" /> 搜索结果
            {searchArticle.map((item) => (
              <SearchArticle key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className="lately">
          <div className="title">
            <i className="iconfont icon-shujukaifagongzuoliushujutansuozuijindakai" />{' '}
            最近更新
            {updateArticle.map((item) => (
              <SearchArticle key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </SearchStyle>
  )
}

export default React.memo(Search)
