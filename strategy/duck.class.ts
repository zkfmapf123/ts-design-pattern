import { Flyable, Quackable } from "./interface";

export abstract class Duck {
  abstract behavior(): string;
}

export class FlyDuck implements Flyable {
  fly(): string {
    return "i can fly";
  }
}

export class NoneFlyDuck implements Flyable {
  fly(): string {
    return "i cannot fly";
  }
}

export class QuackDuck implements Quackable {
  quack(): string {
    return "quack";
  }
}

export class TickDuck implements Quackable {
  quack(): string {
    return "tick";
  }
}

export class ToyDuck implements Quackable {
  quack(): string {
    return "no sound";
  }
}
