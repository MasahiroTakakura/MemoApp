import { initializeApp } from 'firebase/app'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBuWs2Ncnkt0duDATY9U-9i9zcBNU6tkP0',
  authDomain: 'memoapp-d61c2.firebaseapp.com',
  projectId: 'memoapp-d61c2',
  storageBucket: 'memoapp-d61c2.firebasestorage.app',
  messagingSenderId: '626402177379',
  appId: '1:626402177379:web:df431e225a60218edfa356'
}

const app = initializeApp(firebaseConfig)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})

const db = getFirestore(app)

export { app, auth, db }