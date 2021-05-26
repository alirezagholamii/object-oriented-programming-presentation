class Store {
    constructor(user) {
        this.stripe = new Stripe(user)
    }

    purchaseBike(quantity) {
        this.stripe.makePayment(200 * quantity * 100)
    }

    purchaseHemlet(quantity) {
        this.stripe.makePayment(15 * quantity * 100)
    }

}

class Stripe {
    constructor(user) {
        this.user = user
    }

    makePayment(amountInCents) {
        console.log(`${this.user} made payment of $${amountInCents / 100} with Stripe`)
    }

}



const store = new Store('john');

store.purchaseBike(2);
store.purchaseHemlet(2);


// Stipe is expensive! lets go with paypal //////////////////////
/*
class Store {
    constructor(user) {
        this.paypal = new Paypal()
        this.user = user;

        // this.stripe = new Stripe(user)
    }

    purchaseBike(quantity) {
        this.paypal.makePayment(this.user, 200 * quantity)
        // this.stripe.makePayment(200 * quantity * 100)
    }

    purchaseHemlet(quantity) {
        this.paypal.makePayment(this.user, 15 * quantity)
        // this.stripe.makePayment(15 * quantity * 100)
    }

}

class Paypal {
    constructor(user) {
        this.user = user
    }

    makePayment(user, amountInDollers) {
        console.log(`${user} made payment of $${amountInDollers} with Paypal`)
    }
}


const store = new Store('john');

store.purchaseBike(2);
store.purchaseHemlet(2);
*/



//wasn't easy!
// lets have a wrapper or interface //////////////////////////////

/*
class Store {
    constructor(paymentProcessor) {
        this.paymentProcessor = paymentProcessor
    }

    purchaseBike(quantity) {
        this.paymentProcessor.pay(200 * quantity)
    }

    purchaseHemlet(quantity) {
        this.paymentProcessor.pay(15 * quantity)
    }

}

class StripePaymentProcessor {
    constructor(user) {
        this.stripe = new Stripe(user);
    }
    pay(amountInDollers) {
        this.stripe.makePayment(amountInDollers * 100)
    }
}

class Stripe {
    constructor(user) {
        this.user = user
    }
    makePayment(amountInCents) {
        console.log(`${this.user} made payment of $${amountInCents / 100} with Stripe`)
    }
}



// class PaypalPaymentProcessor {
//     constructor(user) {
//         this.user = user;
//         this.paypal = new Paypal();
//     }
//     pay(amountInDollers) {
//         this.paypal.makePayment(this.user,amountInDollers)
//     }
// }

// class Paypal {
//     constructor(user) {
//         this.user = user
//     }
//     makePayment(user, amountInDollers) {
//         console.log(`${user} made payment of $${amountInDollers} with Paypal`)
//     }
// }



const store = new Store(new StripePaymentProcessor('john'));
// const store = new Store(new PaypalPaymentProcessor('john'));

store.purchaseBike(2);
store.purchaseHemlet(2);
*/
