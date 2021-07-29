/*

request('https://www.heise.de', (error, response, body) => {
    // usw.
});

class HTTPClient {

    constructor() {
        // ...
    }

    async request(url, method, headers, body, config) {
        return Promise.reject('Please implement');
    }

    async get(url, headers, body, config) {
        return this.request(url, 'GET', headers, body, config)
    }

    async post(url, headers, body, config) {
        return this.request(url, 'POST', headers, body, config)
    }

    // ...
}




//   import HTTPClient from './HTTPClient';

class AxiosAdapter extends HTTPClient {

    constructor(axios) {
        this._axios = axios;
    }

    async request(url, method, headers, body, config) {
        // hier Aufruf der "axios"-Bibliothek
        // Adaptation der Parameter plus
        // Adaptation des Rückgabewertes
    }

    async get(url, headers, body, config) {
        // ...
    }

    // ...

}

*/

/*


class SimpleEarphones {
    constructor() {
        this.attach = function () {
            console.log("Use Earphones with Type C phone")
        }
    }

}

class EarPhoneAdapter extends SimpleEarphones {
    constructor(typeCphone) {
        super()
        this.attach = function () {
            typeCphone.attach()
        }
    }
}

class TypeCPhone {
    constructor() {
        this.attach = function () {
            console.log("Earphpnes attached to Type C phone")
        }
    }
}

var typeCphone = new TypeCPhone()
var adapter = new EarPhoneAdapter(typeCphone)
adapter.attach()



*/




//************** */

class Adaptee {
    specificRequest() {
        return 'Hong Kong Outlet';
    }
}
// Adapter class, adapt to Adaptee
class TargetAdaptee {
    constructor() {
        this.adaptee = new Adaptee();
    }
    // 
    request() {
        let info = this.adaptee.specificRequest();
        console.log(`${info}  >>> Converter >>> Mainland Socket`);
    }
}

// Remember to new adaptation class
let ta = new TargetAdaptee();
ta.request();

class 