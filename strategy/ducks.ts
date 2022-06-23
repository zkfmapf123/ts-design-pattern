import { Duck, QuackDuck } from "./duck.class";
import { Flyable } from "./interface";

// 바다에 사는 오리
export class SeaDuck extends Duck {
  constructor(
    private readonly fly: Flyable,
    private readonly quack: QuackDuck
  ) {
    super();
  }
  behavior(): string {
    const f = this.fly.fly();
    const q = this.quack.quack();
    return `fly : ${f} sound : ${q}`;
  }
}

export class BirdDuck extends Duck {
  constructor(
    private readonly fly: Flyable,
    private readonly quack: QuackDuck
  ) {
    super();
  }

  behavior(): string {
    const f = this.fly.fly();
    const q = this.quack.quack();
    return `fly : ${f} sound : ${q}`;
  }
}

export class WoodToyDuck extends Duck {
  constructor(
    private readonly fly: Flyable,
    private readonly quack: QuackDuck
  ) {
    super();
  }

  behavior(): string {
    const f = this.fly.fly();
    const q = this.quack.quack();
    return `fly : ${f} sound : ${q}`;
  }
}
