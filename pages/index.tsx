import { VFC } from 'react'

import { Auth } from '../components/Auth'
import { Layout } from '../components/Layout'

const Home: VFC = () => {
  return (
    <Layout title="Home">
      <Auth />
    </Layout>
  )
}

export default Home
