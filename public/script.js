const email = document.getElementById("email");
const password = document.getElementById("password");

const firebaseConfig = {

};



const app = firebase.initializeApp(firebaseConfig);

function register() {
  //  const authenticator = firebase.auth().getAuth();
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value);
}

