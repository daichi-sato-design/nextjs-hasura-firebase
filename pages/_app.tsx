import '../styles/globals.css'
import { VFC } from 'react'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { store } from '../app/store'
import { useUserChanged } from '../hooks/useUserChanged'

const MyApp: VFC = ({ Component, pageProps }: AppProps) => {
  const {} = useUserChanged()
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
