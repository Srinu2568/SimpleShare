import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getStorage } from 'firebase/storage'
import 'firebase/analytics'

const firebaseConfig = {
    apiKey: 'AIzaSyAdCfh0Xqohd_tYR9rfjOQABpMm7kodRP4',
    authDomain: 'simpleshare-10236.firebaseapp.com',
    databaseURL: 'https://simpleshare-10236-default-rtdb.firebaseio.com/',
    projectId: 'simpleshare-10236',
    storageBucket: 'gs://simpleshare-10236.appspot.com',
    messagingSenderId: '405908613840',
    appId: '1:405908613840:web:9e029fb96dd594c29cccd5',
    measurementId: 'G-RBQKL674KJ',
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
getAnalytics(app)
