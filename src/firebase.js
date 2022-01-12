import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyAa8k8Ozd6Qotsf73NTlfk06YbOjI0dbf4",
  authDomain: "bookstore-project-4f9a1.firebaseapp.com",
  databaseURL: "https://bookstore-project-4f9a1-default-rtdb.firebaseio.com",
  projectId: "bookstore-project-4f9a1",
  storageBucket: "bookstore-project-4f9a1.appspot.com",
  messagingSenderId: "820244798910",
  appId: "1:820244798910:web:13b5a11d31eae408de2def",
}

const fireDb = initializeApp(firebaseConfig)
export default fireDb
