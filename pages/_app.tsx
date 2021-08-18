import '../styles/globals.css'
import { VFC } from 'react'
import { AppProps } from 'next/app'

import { useUserChanged } from '../hooks/useUserChanged'

const MyApp: VFC = ({ Component, pageProps }: AppProps) => {
  const {} = useUserChanged()
  return <Component {...pageProps} />
}

export default MyApp
