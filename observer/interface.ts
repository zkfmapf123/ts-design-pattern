export interface Observer {
  addObserver(key: string, ob: Observable): void;
  removeObserver(key: string): void;
  notifiy(len: number, on: number, sen: number): void;
}

export interface Observable {
  setTemperature(len: number, on: number, sen: number): void;
}
