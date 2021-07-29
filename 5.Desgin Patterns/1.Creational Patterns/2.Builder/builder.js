// Builder

// Builder is a creational design pattern that lets you construct
// complex objects step by step. The pattern allows you to
// produce different types and representations of an object using
// the same construction code


class Request {
    constructor(url,method,paylod) {
        this.url = url;
        this.method = method;
        this.payload = paylod;
    }
}

const req = new Request('https://google.com',null,null)

console.log(req);




/*
class Request {
    constructor() {
        this.url = '';
        this.method = '';
        this.payload = {};
    }
}

class RequestBuilder {
    constructor() {
        this.request = new Request();
    }

    forUrl(url) {
        this.request.url = url;
        return this;
    }

    useMethod(method) {
        this.request.method = method;
        return this;
    }

    payload(payload) {
        this.request.payload = payload;
        return this;
    }

    build() {
        return this.request;
    }

}

const req = new RequestBuilder()
    .useMethod('GET')
    .forUrl('https://google.com')
    .build();


console.log(req);

*/




//  another example
//  https://jsmanifest.com/the-builder-pattern-in-javascript/


// https://7learn.com/programming/builder-design-pattern

/*
You can use it when building apps that require you to create
complex objects. This pattern can help you hide
the construction process of building these objects.

*/