'use strict'
// https://refactoring.guru/design-patterns/observer/typescript/example

/**
 * The Subject interface declares a set of methods for managing subscribers.
 */
class Subject {
    // Attach an observer to the subject.
    attach(observer) {
        throw new Error("Interface called!!")
    };

    // Detach an observer from the subject.
    detach(observer) {
        throw new Error("Interface called!!")
    }

    // Notify all observers about an event.
    notify() {
        throw new Error("Interface called!!")
    }
}


/**
 * The Subject owns some important state and notifies observers when the state
 * changes.
 */
class ConcreteSubject extends Subject {
    constructor() {
        super()
        /**
        * state For the sake of simplicity, the Subject's state, essential
        * to all subscribers, is stored in this variable.
        */
        this.state = null;

        /**
        * Observer[] List of subscribers. In real life, the list of
        * subscribers can be stored more comprehensively (categorized by event
        * type, etc.).
        */
        this._observers = []
    }

    /**
     * The subscription management methods.
     */
    attach(observer) {
        const isExist = this._observers.includes(observer);
        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }
        console.log('Subject: Attached an observer.');
        this._observers.push(observer);
    }

    detach(observer) {
        const observerIndex = this._observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.');
        }

        this._observers.splice(observerIndex, 1);
        console.log('Subject: Detached an observer.');
    }

    /**
     * Trigger an update in each subscriber.
     */
    notify() {
        console.log('Subject: Notifying observers...');
        for (const observer of this._observers) {
            observer.update(this);
        }
    }

    /**
     * Usually, the subscription logic is only a fraction of what a Subject can
     * really do. Subjects commonly hold some important business logic, that
     * triggers a notification method whenever something important is about to
     * happen (or after it).
     */
    someBusinessLogic() {
        console.log('\nSubject: I\'m doing something important.');
        this.state = Math.floor(Math.random() * (10 + 1));

        console.log(`Subject: My state has just changed to: ${this.state}`);
        this.notify();
    }
}





/**
 * The Observer interface declares the update method, used by subjects.
 */
class Observer {
    // Receive update from subject.
    update(subject) {
        throw new Error("Interface called!!")
    };
}



/**
 * Concrete Observers react to the updates issued by the Subject they had been
 * attached to.
 */
class ConcreteObserverA extends Observer {
    update(subject) {
        console.log('inside A');
        if (subject instanceof ConcreteSubject && subject.state < 3) {
            console.log('🅰 ConcreteObserverA: Reacted to the event.');
        }
    }
}

class ConcreteObserverB extends Observer {
    update(subject) {
        console.log('inside B');
        if (subject instanceof ConcreteSubject && (subject.state === 0 || subject.state >= 2)) {
            console.log('🅱 ConcreteObserverB: Reacted to the event.');
        }
    }
}


/**
 * The client code.
 */
const subject = new ConcreteSubject();

const observer1 = new ConcreteObserverA();
subject.attach(observer1);

const observer2 = new ConcreteObserverB();
subject.attach(observer2);

subject.someBusinessLogic();
subject.someBusinessLogic();

subject.detach(observer2);

subject.someBusinessLogic();






