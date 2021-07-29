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
var MySql = /** @class */ (function () {
    function MySql() {
    }
    MySql.prototype.insert = function () { };
    MySql.prototype.update = function () { };
    MySql.prototype["delete"] = function () { };
    return MySql;
}());
var FileSystem = /** @class */ (function () {
    function FileSystem() {
    }
    FileSystem.prototype.insert = function () { };
    FileSystem.prototype.update = function () { };
    FileSystem.prototype["delete"] = function () { };
    return FileSystem;
}());
var MongoDB = /** @class */ (function () {
    function MongoDB() {
    }
    MongoDB.prototype.insert = function () { };
    MongoDB.prototype.update = function () {
        console.log('MongoDB update');
    };
    MongoDB.prototype["delete"] = function () { };
    return MongoDB;
}());
var Log = /** @class */ (function () {
    function Log(db) {
        this.db = db;
    }
    Log.prototype.update = function () {
        this.db.update();
    };
    return Log;
}());
var logger = new Log(new MongoDB());
// const logger = new Log(new FileSystem());
// const logger = new Log(new MySql());
logger.update();
