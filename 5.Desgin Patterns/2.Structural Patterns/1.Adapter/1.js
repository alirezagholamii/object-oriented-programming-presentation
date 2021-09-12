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
/* 
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
ta.request(); */



class Color {
    constructor() {
        this.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
    getColor() {
        return this.color
    }
}

// const newColor = new Color();
// console.log('old',newColor.getColor());

class ColorAdapter {
    constructor() {
        this.colorInstance = new Color()
    }
    getColor() {
        const color = this.colorInstance.getColor();
        console.log(color);
        const red = this.hexToDecimal(color.slice(1, 3))
        const green = this.hexToDecimal(color.slice(3, 5))
        const blue = this.hexToDecimal(color.slice(5))
        const rgbaColor = `rgba(${red},${green},${blue},1)`;
        return rgbaColor
    }

    hexToDecimal(hex) {
        return parseInt(hex, 16)
    }
};



// it just works with rgba
class Paint {
    constructor(color) {
        this.color = color
    }

    makeItClear(alpha = 0.5) {
        const [r, g, b] = this.color.slice(5).split(',');
        this.color = `rgba(${r},${g},${b},${alpha})`;
        console.log(this.color);
    }

    doSomeStuff() {
        //...
    }
}

const newColor2 = new ColorAdapter()
const selectedColor = newColor2.getColor()

const paint = new Paint(selectedColor)
paint.makeItClear()