import { AppProps } from 'next/app'
import { VFC, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Provider } from 'react-redux'
import { store } from '../app/store'
import { useUserChanged } from '../hooks/useUserChanged'
import { Hydrate } from 'react-query/hydration'

import '../styles/globals.css'

const MyApp: VFC = ({ Component, pageProps }: AppProps) => {
  const {} = useUserChanged()

  // useStateを使用し、QueryClientのステートを作成
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false, // react-queryはデフォルトで、fetchを3回までリトライする
            refetchOnWindowFocus: false,
          },
        },
      })
  )

  // QueryClientProvider React-queryでCacheをAPP全体で使用するためのラッピング
  // Provider ReduxをAppで使用するためのラッピング
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp
