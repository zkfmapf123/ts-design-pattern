import { PizzaFactory, PizzaIngredient } from "./pizza";
import { Dough, Sauce, Cheese, Olive, Pepperoini } from "./stuffs";

// 알아서 만든다 재료를 조합해서
export class CheesPizza {
  private pamasanDough: string = "";
  private sweetSauce: string = "";
  private americanCheese: string = "";

  constructor(private readonly pizzaFacotry: PizzaIngredient) {}

  prepare() {
    this.pamasanDough = this.pizzaFacotry.createDough().getPamasan();
    this.sweetSauce = this.pizzaFacotry.createSauce().getSweet();
    this.americanCheese = this.pizzaFacotry.createCheese().getAmerican();
  }

  mix() {
    console.log(`mix ${this.pamasanDough} + ${this.sweetSauce}`);
  }

  bake() {
    console.log(`${this.pamasanDough} + spread ${this.americanCheese}`);
  }

  cut() {
    console.log("cut the CheesePizza");
  }

  deliver() {
    console.log(`cheezePizza`);
  }
}

// 알아서 만든다 재료를 조합해서
export class HotChillePizza {
  private hotSauce: string = "";
  private flatDough: string = "";

  constructor(private readonly pizzaFacotry: PizzaIngredient) {}

  prepare() {
    this.hotSauce = this.pizzaFacotry.createSauce().getHotSpice();
    this.flatDough = this.pizzaFacotry.createDough().getFlat();
  }

  deliver() {
    console.log(`${this.hotSauce} + ${this.flatDough} pizza`);
  }
}
