export class Ev {
  events: Map<string, Map<Function, boolean>>;

  constructor() {
    this.events = new Map();
  }

  on(name: string, cb: Function, once: boolean): Function {
    let list = this.events.get(name);
    if (!list) {
      this.events.set(name, new Map());
      return this.on(name, cb, once);
    }
    list.set(cb, once);
    return cb;
  }

  once(name: string, cb: Function): Function {
    return this.on(name, cb, true);
  }

  off(name: string, cb: Function) {
    if (!cb) {
      this.events.delete(name);
      return;
    }
    let list = this.events.get(name);
    if (!list) return;
    list.delete(cb);
  }

  clear() {
    this.events.clear();
  }

  emit(name: string, ...args: any[]):boolean {
    let list = this.events.get(name);
    if (!list) return false;
    list.forEach((once, cb, list) => {
      cb(...args);
      if (once) list.delete(cb);
    })
    return true;
  }
}