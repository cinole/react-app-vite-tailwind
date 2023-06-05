// https://firebase.google.com/docs/web/setup#libraries-bundle
import firebase from 'firebase/app'
import 'firebase/auth'
const env = import.meta.env
// import 'firebase/analytics'
// import 'firebase/firestore'
// import 'firebase/functions'
// import 'firebase/messaging'
// import 'firebase/storage'
// import 'firebase/performance'
// import 'firebase/database'
// import 'firebase/remote-config'

/**
 * Initial firebase app config
 */
try {
  const firebaseConfig = JSON.parse(env.REACT_APP_FIREBASE_CONFIG)
  firebase.initializeApp(firebaseConfig)
} catch (error) {
  // console.error(error)
}

export default firebase
