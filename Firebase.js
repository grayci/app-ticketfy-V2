import * as firebase from 'firebase'
import firestore from 'firebase/firestore'
import firebaseConfig from './config'

const settings = { timestampsInSnapshots: true }

const config = {
  apiKey: firebaseConfig.API_KEY, // YOUR_API_KEY
  authDomain: firebaseConfig.AUTH_DOMAIN, // YOUR_AUTH_DOMAIN
  databaseURL: firebaseConfig.DATABASE_URL, // YOUR_DATABASE_URL
  projectId: firebaseConfig.PROJECT_ID, // YOUR_PROJECT_ID
  storageBucket: firebaseConfig.STORAGE_BUCKET, // YOUR_STORAGE_BUCKET
  messagingSenderId: firebaseConfig.MESSAGING_ID // YOUR_MESSAGING_ID
}

firebase.initializeApp(config)

//firebase.firestore().settings()

export default firebase
