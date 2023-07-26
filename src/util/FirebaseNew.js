
export class FirebaseNew{

    constructor(){

        this.initFirebase();

    }

    initFirebase(){
        const firebaseConfig = {
            apiKey: "AIzaSyC_WAaGfbRsxU8iEwZ37gM__g_HyqrbyT0",
            authDomain: "whatsapp-clone-55584.firebaseapp.com",
            projectId: "whatsapp-clone-55584",
            storageBucket: "gs://whatsapp-clone-55584.appspot.com",
            messagingSenderId: "816258402460",
            appId: "1:816258402460:web:3df195523c9e0f8f744559",
            measurementId: "G-GN3DWW19KH"
          };

          if(!window._initializedFirebase) {

            firebase.initializeApp(firebaseConfig);

            window._initializedFirebase = true;

            const firestore = firebase.firestore();
            const settings = {/* your settings... */ timestampsInSnapshots: true};
            firestore.settings(settings);  
        }
    }

    
    /*static getdb(){

        const db = firebase.firestore();

        db.collection("users").get().then((querySnapshot)=> {
            querySnapshot.forEach((doc)=>{
                console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
            });
        });

    } */

   
    initAuth(){
         
        return new Promise((s, f)=>{

            let provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider)
            .then(result =>{

                let token = result.credential.accessToken;
                let user = result.user;

                s({
                    user,
                    token
                });

            })
            .catch(err=>{
                f(err)
            });

        });

    }

    static db(){
        return  firebase.firestore();
    }

    static hd(){

        return  firebase.storage();

    }


}