const config = {
    apiKey: "AIzaSyDiARsPxaUU0nAjg8ODfVoOeBwaZLAIV88",
  authDomain: "contact-app-dcb4a.firebaseapp.com",
  projectId: "contact-app-dcb4a",
  storageBucket: "contact-app-dcb4a.appspot.com",
  messagingSenderId: "716068449753",
  appId: "1:716068449753:web:06794631fd9b19216e7dc8"
};
export function getFirebaseConfig(){
    if (!config || config.apiKey){
        throw new error('No firebase config object is provided')
    }else{
        return config;
    }
}

