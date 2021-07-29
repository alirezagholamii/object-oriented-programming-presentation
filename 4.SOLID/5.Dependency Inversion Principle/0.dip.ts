//1
/*
class MySql {
  public insert() {}
  public update() {}
  public delete() {}
}

class Log {
  private database;

  constructor() {
    this.database = new MySql();
  }
}
*/

// solution

interface Database {
  insert();
  update();
  delete();
}

class MySql implements Database {
  public insert() {}
  public update() {}
  public delete() {}
}

class FileSystem implements Database {
  public insert() {}
  public update() {}
  public delete() {}
}

class MongoDB implements Database {
  public insert() {      }
  public update() {
    console.log('MongoDB update');
  }
  public delete() {}
}

class Log {
    db: object
  constructor(db?: object) {
        this.db = db;
  }

  public update() {
    (this.db as any).update();
  }
}

const logger = new Log(new MongoDB());
// const logger = new Log(new FileSystem());
// const logger = new Log(new MySql());



logger.update();
