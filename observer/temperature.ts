import { Observable } from "./interface";

interface Temperature {
  staticNum: number;
  len: number;
  on: number;
  sen: number;
}

export class MountainTemp implements Temperature, Observable {
  staticNum: number = 5;
  len: number;
  on: number;
  sen: number;

  constructor() {
    this.len = 0;
    this.on = 0;
    this.sen = 0;
  }

  setTemperature(len: number, on: number, sen: number): void {
    this.len = len + this.staticNum;
    this.on = on + this.staticNum;
    this.sen = sen + this.staticNum;
  }
}

export class SeaTemp implements Temperature, Observable {
  staticNum: number = 10;
  len: number;
  on: number;
  sen: number;

  constructor() {
    this.len = 0;
    this.on = 0;
    this.sen = 0;
  }

  setTemperature(len: number, on: number, sen: number): void {
    this.len = len + this.staticNum;
    this.on = on + this.staticNum;
    this.sen = sen + this.staticNum;
  }
}

export class CityTemp implements Temperature, Observable {
  staticNum: number = -3;
  len: number;
  on: number;
  sen: number;

  constructor() {
    this.len = 0;
    this.on = 0;
    this.sen = 0;
  }

  setTemperature(len: number, on: number, sen: number): void {
    this.len = len + this.staticNum;
    this.on = on + this.staticNum;
    this.sen = sen + this.staticNum;
  }
}
