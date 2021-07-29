class FancyLogger {
    constructor() {
        if (typeof FancyLogger.instance === 'object') {
            return FancyLogger.instance
        }
        this.logs = []
        FancyLogger.instance = this
    }

    log(message) {
        this.logs.push(message)
        console.log(`FANCY: ${message}`)
    }

    printLogCount() {
        console.log(`${this.logs.length} Logs`)
    }
}


export default FancyLogger
















  //   const logger = new FancyLogger();
//   const logger2 = new FancyLogger();

//   console.log('8====>',logger === logger2);


//   Object.freeze(logger)