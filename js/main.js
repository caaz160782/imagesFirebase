// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
//import { initializeApp } from 'firebase/app';
//import { getFirestore } from 'firebase/firestore';
import { getStorage,ref,uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-storage.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBsdM_LMBqMBulYPDCzqeuu1izvfwzXV58",
  authDomain: "prueba-2a57e.firebaseapp.com",
  databaseURL: "https://prueba-2a57e-default-rtdb.firebaseio.com",
  projectId: "prueba-2a57e",
  storageBucket: "prueba-2a57e.appspot.com",
  messagingSenderId: "542323791500",
  appId: "1:542323791500:web:51eb7b39510b8ee1ddcda9"
};

const app = initializeApp(firebaseConfig);
//console.log(app)
//var storageRef = firebase.storage().ref();

const storage = getStorage();
//const storageRef = ref(storage);
//console.log(storage)

$(subirImagen).click(function() {
  //alert("correcto")
  const file = document.querySelector('#photo').files[0];
  //console.log(file)  
  if(file === undefined){
    alert("debe seleccionar una imagen");
  }
  else{
    const name= file.name;
    const metadata= {
        contentType: file.type
    }
    
    const imageRef = ref(storage,  name);    
    //console.log(imageRef)  
    uploadBytesResumable(imageRef, file, metadata)
    .then((snapshot) => {
    console.log('Uploaded', snapshot.totalBytes, 'bytes.');
    console.log('File metadata:', snapshot.metadata);
    // Let's get a download URL for the file.
    getDownloadURL(snapshot.ref).then((url) => {
      console.log('File available at', url);      
      image.src=url; 
    });
  }).catch((error) => {
    console.error('Upload failed', error);
    // ...
  });
  }
});

