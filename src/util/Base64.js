
export class Base64 {


    static getMimetype(urlBase64){

        let regex = /^data:(.+);base64,(.*)$/;
        let result = urlBase64.match(regex);
        return result[1];

    }

    static toFile(base64URL) {

        let mimeType = Base64.getMimetype(base64URL);
        let ext = mimeType.split('/')[1];
        let filename = `file${Date.now()}.${ext}`;

        return fetch(base64URL)
            .then(res => { return res.arrayBuffer(); })
            .then(buf => { return new File([buf], filename, { type: mimeType }); });

    }

}