import { VFC, memo } from 'react'
import { useQueryNews } from '../hooks/useQueryNews'

import { NewsItemMemo } from './NewsItem'

const NewsList: VFC = () => {
  const { status, data } = useQueryNews()

  if (status == 'loading') return <div>{'Loading...'}</div>
  if (status == 'error') return <div>{'Error'}</div>

  return (
    <div>
      <ul>
        {data?.map((news) => (
          <NewsItemMemo key={news.id} news={news} />
        ))}
      </ul>
    </div>
  )
}

export const NewsListMemo = memo(NewsList)
