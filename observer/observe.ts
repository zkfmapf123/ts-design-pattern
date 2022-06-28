import { Observable, Observer } from "./interface";

type ObserverKeyType = "mountain" | "sea" | "city";

export class Observers implements Observer {
  public observerMap: Map<ObserverKeyType, Observable> = new Map();

  addObserver(key: ObserverKeyType, ob: Observable): void {
    this.observerMap.set(key, ob);
  }

  removeObserver(key: ObserverKeyType): void {
    this.observerMap.delete(key);
  }

  notifiy(len: number, on: number, sen: number): void {
    for (const [_, observe] of this.observerMap) {
      observe.setTemperature(len, on, sen);
    }
  }
}
