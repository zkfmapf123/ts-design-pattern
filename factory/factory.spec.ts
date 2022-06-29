import { CheesPizza, HotChillePizza } from "./pizza.species";
import { PizzaFactory } from "./pizza";

describe("factory test", () => {
  it("cheeze pizza test", (done) => {
    const cheezPizza = new CheesPizza(new PizzaFactory());

    cheezPizza.prepare();
    cheezPizza.mix();
    cheezPizza.bake();
    cheezPizza.cut();
    cheezPizza.deliver();
    done();
  });

  it("hot pizza test", (done) => {
    const hotPizza = new HotChillePizza(new PizzaFactory());

    hotPizza.prepare();
    hotPizza.deliver();
    done();
  });
});
