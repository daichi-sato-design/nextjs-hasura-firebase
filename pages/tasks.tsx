import { VFC } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import firebase from '../firebaseConfig'
import { useLogout } from '../hooks/useLogout'
import { Layout } from '../components/Layout'
import { ChevronDoubleLeftIcon, LogoutIcon } from '@heroicons/react/solid'
import { NewsListMemo } from '../components/NewsList'
import { NewsEditMemo } from '../components/NewsEdit'

const Tasks: VFC = () => {
  const router = useRouter()
  // カスタムフック(useLogout)から関数を取得
  const { logout } = useLogout()
  const user = firebase.auth().currentUser
  console.log(user)
  return (
    <Layout title="Tasks">
      <p className="my-3">{user?.email}</p>
      <LogoutIcon
        className="h-5 w-5 my-3 text-blue-500 cursor-pointer"
        onClick={() => {
          logout()
          router.push('/')
        }}
      />

      <p className="mt-10 mb-5 text-blue-500 text-xl font-bold">News Edit</p>
      <div className="grid grid-cols-2 gap-40">
        <NewsListMemo />
        <NewsEditMemo />
      </div>

      <Link href="/">
        <div className="mt-20 flex items-center cursor-pointer">
          <ChevronDoubleLeftIcon className="h-5 w-5 mx-1 text-blue-500" />
          <span>Back to main page</span>
        </div>
      </Link>
    </Layout>
  )
}

export default Tasks
