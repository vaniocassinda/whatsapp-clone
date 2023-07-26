import { FirebaseNew } from "./FirebaseNew";

export class Upload {

    static send(file, from){

        return new Promise((s, f) =>{

            let uploadTask = FirebaseNew.hd().ref(from).child(Date.now() + '_' + file.name).put(file);
 
            uploadTask.on('state_changed', e => {
 
                // console.info('upload', e);
 
            }, err => {
                f();
            }, () => {

               //s(uploadTask.snapshot);
               uploadTask.snapshot.ref.getDownloadURL().then(downloadURL =>{
                  s(downloadURL);
               });
              
                
            });

        });

    }

}