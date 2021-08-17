import '../styles/globals.css'
import { AppProps } from 'next/app'
import { VFC } from 'react'

const MyApp: VFC = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
