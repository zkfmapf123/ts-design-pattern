import {
  FlyDuck,
  NoneFlyDuck,
  QuackDuck,
  TickDuck,
  ToyDuck,
} from "./duck.class";
import { BirdDuck, SeaDuck, WoodToyDuck } from "./ducks";

describe("duck test", () => {
  test("seaDuck", (done) => {
    const d = new SeaDuck(new NoneFlyDuck(), new QuackDuck());
    expect(d.behavior()).toBe(`fly : i cannot fly sound : quack`);
    done();
  });

  test("birdDuck", (done) => {
    const d = new BirdDuck(new FlyDuck(), new TickDuck());
    expect(d.behavior()).toBe(`fly : i can fly sound : tick`);
    done();
  });

  test("woodToyDuck", (done) => {
    const d = new WoodToyDuck(new NoneFlyDuck(), new ToyDuck());
    expect(d.behavior()).toBe(`fly : i cannot fly sound : no sound`);
    done();
  });
});
