import logo from "./logo.svg";
import firebase from "firebase/app";
import "firebase/firestore";
import "./App.css";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAANyi90tLUuGmiyGt-qK9bsNpunLam9Jc",
  authDomain: "portfolio-739cb.firebaseapp.com",
  databaseURL: "https://portfolio-739cb-default-rtdb.firebaseio.com",
  projectId: "portfolio-739cb",
  storageBucket: "portfolio-739cb.appspot.com",
  messagingSenderId: "160750056368",
  appId: "1:160750056368:web:46097208e3e05f4cc19c75"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.collection("projects")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  });

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
