type Callback = (...args: any[]) => any;
type Subscription = {
    unsubscribe: () => void
}

class EventEmitter {
  private events: Map<string, Set<Callback>>;

  constructor() {
    this.events = new Map();
  }

  subscribe(eventName: string, callback: Callback): Subscription {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, new Set());
    }
    this.events.get(eventName)!.add(callback);

    return {
      unsubscribe: () => {
        this.events.get(eventName)?.delete(callback);
      },
    };
  }

  emit(eventName: string, args: any[] = []): any[] {
    return this.events.get(eventName)
      ? Array.from(this.events.get(eventName)!).map((cb) => cb(...args))
      : [];
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */