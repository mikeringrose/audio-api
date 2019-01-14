class Context {
  constructor(event, context, db) {
    context.callbackWaitsForEmptyEventLoop = false;
    this.event = event;
    this.context = context;
    this.db = db;
  }

  getModel() {
    return this.db();
  }

}

module.exports = Context;
