import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

admin.initializeApp()

// Firebaseの認証でユーザーが新規で登録された際に発行されるJWTトークンに
// Hasuraのエンドポイントの認証に必要な情報を埋め込む関数
export const setCustomClaims = functions.auth.user().onCreate(async (user) => {
  const customCliams = {
    'https://hasura.io/jwt/claims': {
      'x-hasura-default-role': 'staff',
      'x-hasura-allowed-roles': ['staff'],
      'x-hasura-user-id': user.uid,
    },
  }
  try {
    await admin.auth().setCustomUserClaims(user.uid, customCliams)
    // setCustomUserClaimsの完了にタイムラグが発生するため,
    // 完了後にFireStoreに"user_meta"を保存する(ReactAppで"user_meta"をsnapshotで監視し、同期を図る)
    // ドキュメント(user.uid) : フィールド(refreshTime)にサーバーの時間を保存
    await admin.firestore().collection('user_meta').doc(user.uid).create({
      refreshTime: admin.firestore.FieldValue.serverTimestamp(),
    })
  } catch (e) {
    console.log(e)
  }
})
